import { useContext, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import { SocketContext } from '../context'

const plans = [
    {
        name: 'Best of 3',
        value: 3
    },
    {
        name: 'Best of 5',
        value: 5
    },
    {
        name: 'Best of 7',
        value: 7
    },
    {
        name: 'Best of 11',
        value: 11
    }
]

const SelectRounds = () => {
    const { selected, setSelected } = useContext(SocketContext)
    
    useEffect(() => setSelected(plans[0]), [])
    

  return (
    <div className="w-full px-4 py-2">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Number of Rounds</RadioGroup.Label>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                    `${
                    active
                        ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                        : ''
                    }
                    ${
                    checked ? 'bg-[#20AAE9] bg-opacity-75 text-white' : 'bg-white'
                    }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                            <div className="text-sm">
                                <RadioGroup.Label
                                    as="p"
                                    className={`font-medium font-spectral  ${
                                    checked ? 'text-white' : 'text-gray-900'
                                    }`}
                                >
                                    {plan.name}
                                </RadioGroup.Label>
                            </div>
                        </div>
                                
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

const CheckIcon = (props:any) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SelectRounds
