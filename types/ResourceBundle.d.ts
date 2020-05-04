declare module "sap/base/i18n/ResourceBundle" {
	export default class ResourceBundle {
		getText(
			sKey: string,
			aArgs?: any[],
			bIgnoreKeyFallback?: boolean
		) : string;
	}
}