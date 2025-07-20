import './offer.css';
import { useState } from 'react';

export default function Offer() {
      const [showPopup, setShowPopup] = useState(true);

      const hide_pup = () => setShowPopup(false);

      return (
            <>
                  {showPopup && (
                        <section className='offer' dir='rtl'>
                              <section className='content'>
                                    <button className="btn-close" onClick={hide_pup}></button>
                                    <img src='' alt='' />
                                    <h2>بعد فوزي بالمركز الأول في البطولة، حبيت أفرحكم معايا!</h2>
                                    <p>كجزء من احتفالي، قررت أقدم خصم 50% علي اشتراكات المتابعة علشان نكون جزء من رحلتك للتغير!</p>
                              </section>
                        </section>
                  )}
            </>
      );
}
