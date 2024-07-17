import { PromoHeading } from "./PromoHeading"

export const Promo = () => {
    const data = {
        heading:'99% off all items',
        callToAction:"Everything must go"
    }
    
    const { heading, callToAction } = data;


  return (

    <>
   
    <PromoHeading heading={heading} callToAction={callToAction}/>
    <hr />

    </>
  )
}
