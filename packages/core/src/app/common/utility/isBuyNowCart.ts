export default function isBuyNowCart(): boolean {
    return true;

    const lastPathName = window.location.pathname.split('/').pop();

    return !(lastPathName === 'checkout' || lastPathName === 'embedded-checkout');
}
