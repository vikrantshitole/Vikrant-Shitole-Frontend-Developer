import { act, render, screen } from "../../test-utils";
import Header from "../Header/Header";
import user from '@testing-library/user-event'
import CapsuleRecord from "./CapsuleRecord";
const item = {
  capsule_id: "dragon1",
  capsule_serial: "C101",
  details: "Reentered after three weeks in orbit",
  landings: 1,
  missions: [{ name: "COTS 1", flight: 7 }],
  original_launch: "2010-12-08T15:43:00.000Z",
  original_launch_unix: 1291822980,
  reuse_count: 0,
  status: "retired",
  type: "Dragon 1.0",
};
const rocket =  {
    "id": 1,
    "active": false,
    "stages": 2,
    "boosters": 0,
    "cost_per_launch": 6700000,
    "success_rate_pct": 40,
    "first_flight": "2006-03-24",
    "country": "Republic of the Marshall Islands",
    "company": "SpaceX",
    "height": {
        "meters": 22.25,
        "feet": 73
    },
    "diameter": {
        "meters": 1.68,
        "feet": 5.5
    },
    "mass": {
        "kg": 30146,
        "lb": 66460
    },
    "payload_weights": [
        {
            "id": "leo",
            "name": "Low Earth Orbit",
            "kg": 450,
            "lb": 992
        }
    ],
    "first_stage": {
        "reusable": false,
        "engines": 1,
        "fuel_amount_tons": 44.3,
        "burn_time_sec": 169,
        "thrust_sea_level": {
            "kN": 420,
            "lbf": 94000
        },
        "thrust_vacuum": {
            "kN": 480,
            "lbf": 110000
        }
    },
    "second_stage": {
        "reusable": false,
        "engines": 1,
        "fuel_amount_tons": 3.38,
        "burn_time_sec": 378,
        "thrust": {
            "kN": 31,
            "lbf": 7000
        },
        "payloads": {
            "option_1": "composite fairing",
            "composite_fairing": {
                "height": {
                    "meters": 3.5,
                    "feet": 11.5
                },
                "diameter": {
                    "meters": 1.5,
                    "feet": 4.9
                }
            }
        }
    },
    "engines": {
        "number": 1,
        "type": "merlin",
        "version": "1C",
        "layout": "single",
        "isp": {
            "sea_level": 267,
            "vacuum": 304
        },
        "engine_loss_max": 0,
        "propellant_1": "liquid oxygen",
        "propellant_2": "RP-1 kerosene",
        "thrust_sea_level": {
            "kN": 420,
            "lbf": 94000
        },
        "thrust_vacuum": {
            "kN": 480,
            "lbf": 110000
        },
        "thrust_to_weight": 96
    },
    "landing_legs": {
        "number": 0,
        "material": null
    },
    "flickr_images": [
        "https://imgur.com/DaCfMsj.jpg",
        "https://imgur.com/azYafd8.jpg"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1",
    "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
    "rocket_id": "falcon1",
    "rocket_name": "Falcon 1",
    "rocket_type": "rocket"
}
const status = {
    active: "bg-success",
    destroyed: "bg-danger",
    unknown: "bg-soft-secondary",
    retired: "bg-warning",
    true: "bg-success",
    false: "bg-danger",
  };
describe("Capsule Record", () => {
  test("Capsule Record Render", () => {
    render(<CapsuleRecord item={item} />);
    const serialIdElement = screen.getByRole('generic',{name: /serial\-id/i})
    expect(serialIdElement).toHaveTextContent(item.capsule_serial)

    const statusElement = screen.getByRole('generic',{name: /status/i})
    expect(statusElement).toHaveTextContent(item.status)
    expect(statusElement).toHaveClass(status[item.status])

    const capsuleIdElement = screen.getByText(item.capsule_id)
    expect(capsuleIdElement).toBeInTheDocument()

    
    const detailsElement = screen.getByText(item.details)
    expect(detailsElement).toBeInTheDocument()

    
    const typeElement = screen.getByRole('listitem',{name: /type/i})
    expect(typeElement).toHaveTextContent(item.type)

    
    const reuseCountElement = screen.getByRole('listitem',{name: /reuse/i})
    expect(reuseCountElement).toHaveTextContent(item.reuse_count + " Reuse Count")

  });
});
describe('Rocket',()=>{
    test('Rocket Record trigger',()=>{
      render(<Header/>,async()=>{
            // screen.debug()
            user.setup()
            const checkboxElement = screen.getByRole('switch')
            expect(checkboxElement).toBeInTheDocument();
    
          //   const labelElement = screen.getByRole('label')
          //   expect(labelElement).toHaveTextContent('Capsulse');
    
           await act(async()=>await user.click(checkboxElement)) ;
            expect(checkboxElement).toBeChecked()
          //   expect(labelElement).toHaveTextContent('Rocket')
          describe('Rocket Record',()=>{

              test("Rocket Record Render", () => {
                  
                  render(<CapsuleRecord item={rocket} />);
                  const serialIdElement = screen.getByRole('generic',{name: /serial\-id/i})
                  expect(serialIdElement).toHaveTextContent(rocket.rocket_id)
              
                  const statusElement = screen.getByRole('generic',{name: /status/i})
                  expect(statusElement).toHaveTextContent(rocket.rocket_name)
                  expect(statusElement).toHaveClass(status[rocket.active])        
                  
                  const detailsElement = screen.getByText(rocket.descriptions)
                  expect(detailsElement).toBeInTheDocument()
              
                  
                  const typeElement = screen.getByRole('listitem',{name: /type/i})
                  expect(typeElement).toHaveTextContent(rocket.rocket_type)
              
                  
                  const reuseCountElement = screen.getByRole('listitem',{name: /reuse/i})
                  expect(reuseCountElement).toHaveTextContent(rocket.mass.kg + " kg")
              
                });
          })
      })
    })
            
})