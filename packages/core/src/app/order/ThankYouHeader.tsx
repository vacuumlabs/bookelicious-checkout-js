import React, { FunctionComponent, memo } from 'react';

import { PrimaryHeader } from '../ui/header';

export interface HeaderProps {
    name?: string;
}

const ThankYouHeader: FunctionComponent<HeaderProps> = () => (
    <PrimaryHeader testId="order-confirmation-heading">
        Thank you for your order!
    </PrimaryHeader>
);

export default memo(ThankYouHeader);
