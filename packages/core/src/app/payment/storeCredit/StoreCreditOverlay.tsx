import React, { FunctionComponent } from 'react';

import { TranslatedString } from '@bigcommerce/checkout/locale';

const StoreCreditOverlay: FunctionComponent<{isPaymentDisabled: boolean}> = ({isPaymentDisabled}) => (
    <div className="storeCreditOverlay" data-test="payment-store-credit-overlay">
        <p className="storeCreditOverlay-text">
          {isPaymentDisabled ? ("Payment options unavailable") : <TranslatedString id="payment.payment_not_required_text" />}
        </p>
    </div>
);

export default StoreCreditOverlay;
