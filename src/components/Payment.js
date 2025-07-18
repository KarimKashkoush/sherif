import React from 'react'
import "./payment.css"
export default function Payment() {
      return (
            <section className="payment">
                        <form>
                              <div class="name">
                                    <input type="text" placeholder="enter your name" />
                              </div>
                              <div>
                                    <input type='tel' placeholder='enter your phone number'/> 
                              </div>

                              <button>Send</button>
                        </form>
            </section>
      )
}
