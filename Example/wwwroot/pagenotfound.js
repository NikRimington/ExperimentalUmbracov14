var s = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var r = (e, n, t) => (s(e, n, "read from private field"), t ? t.call(e) : n.get(e)), c = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, m = (e, n, t, o) => (s(e, n, "write to private field"), o ? o.call(e, t) : n.set(e, t), t);
import { UMB_DOCUMENT_ENTITY_TYPE as d } from "@umbraco-cms/backoffice/document";
import { UmbEntityActionBase as u } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as p, UMB_MODAL_MANAGER_CONTEXT as l } from "@umbraco-cms/backoffice/modal";
const y = new p("pagenotfound.modal", {
  modal: {
    type: "sidebar",
    size: "medium"
    // full, large, medium, small
  }
});
var i;
class g extends u {
  constructor(t, o) {
    super(t, o);
    // Modal Manager Context - to open modals such as our custom one or a icon picker,
    // content picker etc
    c(this, i, void 0);
    this.consumeContext(l, (a) => {
      m(this, i, a);
    });
  }
  async execute() {
    var o;
    if (!this.args.unique)
      throw new Error("The document unique identifier is missing");
    const t = (o = r(this, i)) == null ? void 0 : o.open(this, y, {
      data: {
        entityKey: this.args.unique
      }
    });
    await (t == null ? void 0 : t.onSubmit().catch((a) => {
      console.log("rejected", a);
    }));
  }
}
i = new WeakMap();
const M = {
  type: "entityAction",
  kind: "default",
  alias: "examinepeek.entity.action",
  name: "Examine Peek Entity Action",
  weight: 400,
  api: g,
  meta: {
    icon: "icon-sensor",
    label: "404 Manager"
  },
  forEntityTypes: [d]
}, f = [M], h = {
  type: "modal",
  alias: "pagenotfound.modal",
  name: "Page Not Found Modal",
  js: () => import("./pagenotfound.modal.element-D8ZVmZLN.js")
}, E = [h], x = (e, n) => {
  n.registerMany([
    ...f,
    ...E
  ]);
};
export {
  x as onInit
};
//# sourceMappingURL=pagenotfound.js.map
