import React, { FunctionComponent, useEffect } from 'react';

import { CheckoutButton } from '@bigcommerce/checkout/checkout-button-integration';
import { isHTMLElement } from '@bigcommerce/checkout/instrument-utils';
import {
    CheckoutButtonProps,
    CheckoutButtonResolveId,
    toResolvableComponent,
} from '@bigcommerce/checkout/payment-integration-api';

const beautifyAmazonButton = (): void => {
    if (!document.querySelector('.checkout-button-container')) {
        return;
    }

    const container = document.querySelector('#amazonpayCheckoutButton > div');

    if (container) {
        const amazonButton = container.shadowRoot?.querySelector('.amazonpay-button-view1');

        if (isHTMLElement(amazonButton)) {
            amazonButton.style.height = '36px';

            return;
        }
    }

    setTimeout(beautifyAmazonButton, 10);
};

const AmazonPayV2Button: FunctionComponent<CheckoutButtonProps> = (props) => {
    useEffect(() => {
        beautifyAmazonButton();
    }, []);

    return (
        <div className="AmazonPayContainer">
            <CheckoutButton {...props} />
        </div>
    );
};

export default toResolvableComponent<CheckoutButtonProps, CheckoutButtonResolveId>(
    AmazonPayV2Button,
    [{ id: 'amazonpay' }],
);
