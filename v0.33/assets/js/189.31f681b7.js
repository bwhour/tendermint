(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{760:function(e,a,t){"use strict";t.r(a);var n=t(1),o=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"creating-a-proposal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-proposal"}},[e._v("#")]),e._v(" Creating a proposal")]),e._v(" "),t("p",[e._v("A block consists of a header, transactions, votes (the commit),\nand a list of evidence of malfeasance (ie. signing conflicting votes).")]),e._v(" "),t("p",[e._v("We include no more than 1/10th of the maximum block size\n("),t("code",[e._v("ConsensusParams.Block.MaxBytes")]),e._v(") of evidence with each block.")]),e._v(" "),t("h2",{attrs:{id:"reaping-transactions-from-the-mempool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reaping-transactions-from-the-mempool"}},[e._v("#")]),e._v(" Reaping transactions from the mempool")]),e._v(" "),t("p",[e._v("When we reap transactions from the mempool, we calculate maximum data\nsize by subtracting maximum header size ("),t("code",[e._v("MaxHeaderBytes")]),e._v("), the maximum\namino overhead for a block ("),t("code",[e._v("MaxAminoOverheadForBlock")]),e._v("), the size of\nthe last commit (if present) and evidence (if present). While reaping\nwe account for amino overhead for each transaction.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBNYXhEYXRhQnl0ZXMobWF4Qnl0ZXMgaW50NjQsIHZhbHNDb3VudCwgZXZpZGVuY2VDb3VudCBpbnQpIGludDY0IHsKIHJldHVybiBtYXhCeXRlcyAtCiAgTWF4T3ZlcmhlYWRGb3JCbG9jayAtCiAgTWF4SGVhZGVyQnl0ZXMgLQogIGludDY0KHZhbHNDb3VudCkqTWF4Vm90ZUJ5dGVzIC0KICBpbnQ2NChldmlkZW5jZUNvdW50KSpNYXhFdmlkZW5jZUJ5dGVzCn0K"}}),e._v(" "),t("h2",{attrs:{id:"validating-transactions-in-the-mempool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validating-transactions-in-the-mempool"}},[e._v("#")]),e._v(" Validating transactions in the mempool")]),e._v(" "),t("p",[e._v("Before we accept a transaction in the mempool, we check if it's size is no more\nthan {MaxDataSize}. {MaxDataSize} is calculated using the same formula as\nabove, except we subtract the max number of evidence, {MaxNum} by the maximum size of evidence")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBNYXhEYXRhQnl0ZXNVbmtub3duRXZpZGVuY2UobWF4Qnl0ZXMgaW50NjQsIHZhbHNDb3VudCBpbnQpIGludDY0IHsKIHJldHVybiBtYXhCeXRlcyAtCiAgTWF4T3ZlcmhlYWRGb3JCbG9jayAtCiAgTWF4SGVhZGVyQnl0ZXMgLQogIChtYXhOdW1FdmlkZW5jZSAqIE1heEV2aWRlbmNlQnl0ZXMpCn0K"}})],1)}),[],!1,null,null,null);a.default=o.exports}}]);