import Purchases from 'react-native-purchases';

export const initRevenueCat = async () => {
	await Purchases.configure({ apiKey: 'YOUR_REVENUECAT_API_KEY' });
};

export const checkSubscription = async () => {
	const purchaserInfo = await Purchases.getCustomerInfo();
	return purchaserInfo.entitlements.active['Pro Access'] !== undefined;
};
