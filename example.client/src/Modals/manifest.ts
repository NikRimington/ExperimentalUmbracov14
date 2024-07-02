import { ManifestModal } from "@umbraco-cms/backoffice/extension-registry";

const pageNotFoundModal: ManifestModal = {
    type: 'modal',
    alias: 'pagenotfound.modal',
    name: 'Page Not Found Modal',
    js: () => import('./pagenotfound.modal.element.ts')
}
export const manifests = [pageNotFoundModal];