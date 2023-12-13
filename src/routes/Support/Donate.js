import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Donate() {

  const initialOptions = {
    clientId: "AavAxwjTI5fllRVD5q5LX4owxx8WNX9y0BvoVkawwTa_fZPX6i5omRaiqUc9r3tlqtA4JFo-uCTDpaeU",
    currency: "USD",
    intent: "capture",
};

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div>
        <h1>Support Our Ministry</h1>
        <button>Donate</button>
        <PayPalButtons />
      </div>
    </PayPalScriptProvider>
  )
}
