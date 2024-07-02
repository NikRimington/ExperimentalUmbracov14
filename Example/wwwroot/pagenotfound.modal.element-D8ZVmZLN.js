import { html as y, state as h, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as v } from "@umbraco-cms/backoffice/modal";
import { UmbDocumentItemRepository as C } from "@umbraco-cms/backoffice/document";
var b = Object.defineProperty, g = Object.getOwnPropertyDescriptor, d = (e, t, o, n) => {
  for (var a = n > 1 ? void 0 : n ? g(t, o) : t, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (a = (n ? r(t, o, a) : r(a)) || a);
  return n && a && b(t, o, a), a;
}, N = (e, t, o) => {
  if (!t.has(e))
    throw TypeError("Cannot " + o);
}, u = (e, t, o) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, o);
}, m = (e, t, o) => (N(e, t, "access private method"), o), c, p, l, _;
let s = class extends v {
  constructor() {
    super(), u(this, c), u(this, l), this._documentName = "";
  }
  connectedCallback() {
    var e, t;
    super.connectedCallback(), (e = this.data) != null && e.entityKey ? console.log(`PNFM: ${(t = this.data) == null ? void 0 : t.entityKey}`) : console.error("PNFM: connectedCallback. There is NO EntityKey passed into the modal"), m(this, l, _).call(this);
  }
  handleClose() {
    var e;
    (e = this.modalContext) == null || e.reject({ type: "close" });
  }
  render() {
    return console.log(this.data), y`
            <umb-body-layout headline="Page Not Found #BETA#">
                <uui-box headline="Data">
                    Current node: "${this._documentName}"

                    <umb-input-document min=1 max=1
                        .value=${this._selection}
                        @change=${m(this, c, p)}>
                    </umb-input-document>
                </uui-box>
                                
                <div slot="actions">
                    <uui-button id="close" label="Close" @click="${this.handleClose}">Close</uui-button>
                </div>
            </umb-body-layout>
        `;
  }
};
c = /* @__PURE__ */ new WeakSet();
p = function(e) {
  this._selection = e.target.selection[0];
};
l = /* @__PURE__ */ new WeakSet();
_ = async function() {
  var o, n;
  if (!((o = this.data) != null && o.entityKey))
    return;
  const { data: e } = await new C(this).requestItems([this.data.entityKey]);
  if (!e)
    return;
  const t = e[0];
  this._documentName = (n = t.variants[0]) == null ? void 0 : n.name;
};
d([
  h()
], s.prototype, "_selection", 2);
d([
  h()
], s.prototype, "_documentName", 2);
s = d([
  f("page-not-found-modal")
], s);
const x = s;
export {
  s as PageNotFoundModalElement,
  x as default
};
//# sourceMappingURL=pagenotfound.modal.element-D8ZVmZLN.js.map
