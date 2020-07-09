import { hideAt } from './make-responsive-component'

export const SmallAndDown = hideAt({ min: '320px' })
export const MediumAndDown = hideAt({ min: '640px' })
export const MediumOnly = hideAt({ max: '640px', min: '960px' })
export const MediumAndUp = hideAt({ max: '640px' })
export const LargeAndUp = hideAt({ max: '960px' })

/*
  Sure, it's just sugar for:
  
  styled.div`
    @media (max-width: 320px) {
      display: none;
    }
  `

  but...
  it's just an example...
  ees jas for fun.
*/
