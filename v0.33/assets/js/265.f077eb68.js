(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{837:function(e,t,n){"use strict";n.r(t);var s=n(1),g=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"subscribing-to-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-to-events"}},[e._v("#")]),e._v(" Subscribing to Events")]),e._v(" "),n("p",[e._v("A Tendermint node emits events about important state transitions during\nconsensus. These events can be queried by clients via the "),n("a",{attrs:{href:"https://docs.tendermint.com/master/rpc",target:"_blank",rel:"noopener noreferrer"}},[e._v("RPC interface"),n("OutboundLink")],1),e._v("\non nodes that enable it. The "),n("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/types#EventNewBlockValue",target:"_blank",rel:"noopener noreferrer"}},[e._v("list of supported event types"),n("OutboundLink")],1),e._v(" can\nbe found in the tendermint/types Go package.")]),e._v(" "),n("p",[e._v("In Tendermint v0.36 there are two APIs to query events:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The "),n("a",{attrs:{href:"#legacy-streaming-api"}},[n("strong",[e._v("legacy streaming API")])]),e._v(", comprising the\n"),n("code",[e._v("subscribe")]),e._v(", "),n("code",[e._v("unsubscribe")]),e._v(", and "),n("code",[e._v("unsubscribe_all")]),e._v(" RPC methods over websocket.")])]),e._v(" "),n("li",[n("p",[e._v("The "),n("a",{attrs:{href:"#event-log-api"}},[n("strong",[e._v("event log API")])]),e._v(", comprising the "),n("code",[e._v("events")]),e._v(" RPC method.")])])]),e._v(" "),n("p",[e._v("The legacy streaming API is deprecated in Tendermint v0.36, and will be removed\nin Tendermint v0.37. Clients are strongly encouraged to migrate to the new\nevent log API as soon as is practical.")]),e._v(" "),n("h2",{attrs:{id:"filter-queries"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filter-queries"}},[e._v("#")]),e._v(" Filter Queries")]),e._v(" "),n("p",[e._v("Event requests take a "),n("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/internal/pubsub/query/syntax",target:"_blank",rel:"noopener noreferrer"}},[e._v("filter query"),n("OutboundLink")],1),e._v(" parameter. A filter query is a\nstring that describes a subset of available event items to return.  An empty\nquery matches all events; otherwise a query comprises one or more "),n("em",[e._v("terms")]),e._v("\ncomparing event metadata to target values.")]),e._v(" "),n("p",[e._v("For example, to select new block events, use the term:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dG0uZXZlbnQgPSAnTmV3QmxvY2snCg=="}}),e._v(" "),n("p",[e._v("Multiple terms can be combined with "),n("code",[e._v("AND")]),e._v(" (case matters), for example to match\nthe transaction event with a given hash, use the query:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dG0uZXZlbnQgPSAnVHgnIEFORCB0eC5oYXNoID0gJ0VBN0IzM0YnCg=="}}),e._v(" "),n("p",[e._v("Operands may be strings in single quotes ("),n("code",[e._v("'Tx'")]),e._v("), numbers ("),n("code",[e._v("45")]),e._v("), dates, or\ntimestamps.")]),e._v(" "),n("p",[e._v("The comparison operators include "),n("code",[e._v("=")]),e._v(", "),n("code",[e._v("<")]),e._v(", "),n("code",[e._v("<=")]),e._v(", "),n("code",[e._v(">")]),e._v(", "),n("code",[e._v(">=")]),e._v(", and "),n("code",[e._v("CONTAINS")]),e._v(" (for\nsubstring match).  In addition, the "),n("code",[e._v("EXISTS")]),e._v(" operator checks for the presence\nof an attribute regardless of its value.")]),e._v(" "),n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[e._v("#")]),e._v(" Attributes")]),e._v(" "),n("p",[e._v("Tendermint implicitly defines a string-valued "),n("code",[e._v("tm.event")]),e._v(" attribute for all\nevent types. Transaction items (type "),n("code",[e._v("Tx")]),e._v(") are also assigned "),n("code",[e._v("tx.hash")]),e._v("\n(string), giving the hash of the transaction, and and "),n("code",[e._v("tx.height")]),e._v(" (number)\ngiving the height of the block containing the transaction.  For "),n("code",[e._v("NewBlock")]),e._v(" and\n"),n("code",[e._v("NewBlockHeader")]),e._v(" events, Tendermint defines a "),n("code",[e._v("block.height")]),e._v(" attribute giving\nthe height of the block.")]),e._v(" "),n("p",[e._v("Additional attributes can be provided by the application as "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/proto/tendermint/abci/types.proto#L397",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI "),n("code",[e._v("Event")]),e._v("\nrecords"),n("OutboundLink")],1),e._v(" in response to the "),n("code",[e._v("FinalizeBlock")]),e._v(" request.  The full name\nof the attribute in the query is formed by combining the "),n("code",[e._v("type")]),e._v(" and attribute\n"),n("code",[e._v("key")]),e._v(" with a period.")]),e._v(" "),n("p",[e._v("For example, given the events")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"W11hYmNpLkV2ZW50e3sKICAgIFR5cGU6ICZxdW90O3Jld2FyZCZxdW90OywKICAgIEF0dHJpYnV0ZXM6IFtdYWJjaS5FdmVudEF0dHJpYnV0ZXsKICAgICAgICB7S2V5OiAmcXVvdDthZGRyZXNzJnF1b3Q7LCBWYWx1ZTogJnF1b3Q7Y29zbW9zMXh5ejAxMnBkcSZxdW90O30sCiAgICAgICAge0tleTogJnF1b3Q7YW1vdW50JnF1b3Q7LCBWYWx1ZTogJnF1b3Q7NDUuNjImcXVvdDt9LAogICAgICAgIHtLZXk6ICZxdW90O2JhbGFuY2UmcXVvdDssIFZhbHVlOiAmcXVvdDsxMDAuMzkwMDAxJnF1b3Q7fSwKICAgIH0sCn19Cg=="}}),e._v(" "),n("p",[e._v("a query may refer to the names "),n("code",[e._v("reward.address")]),e._v(", "),n("code",[e._v("reward.amount")]),e._v(", and "),n("code",[e._v("reward.balance")]),e._v(", as in:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cmV3YXJkLmFkZHJlc3MgRVhJU1RTIEFORCByZXdhcmQuYmFsYW5jZSAmZ3Q7IDQ1Cg=="}}),e._v(" "),n("p",[e._v("Certain application-specific metadata are also indexed for offline queries.\nSee "),n("RouterLink",{attrs:{to:"/app-dev/indexing-transactions.html"}},[e._v("Indexing transactions")]),e._v(" for more details.")],1),e._v(" "),n("h2",{attrs:{id:"event-log-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-log-api"}},[e._v("#")]),e._v(" Event Log API")]),e._v(" "),n("p",[e._v("Starting in Tendermint v0.36, when the "),n("code",[e._v("rpc.event-log-window-size")]),e._v("\nconfiguration is enabled, the node maintains maintains a log of all events\nwithin this operator-defined time window. This API supersedes the websocket\nsubscription API described below.")]),e._v(" "),n("p",[e._v("Clients can query these events can by long-polling the "),n("code",[e._v("/events")]),e._v(" RPC method,\nwhich returns the most recent items from the log that match the "),n("a",{attrs:{href:"https://pkg.go.dev/github.com/tendermint/tendermint@master/rpc/coretypes#RequestEvents",target:"_blank",rel:"noopener noreferrer"}},[e._v("request\nparameters"),n("OutboundLink")],1),e._v(".  Each item returned includes a cursor that marks its\nlocation in the log. Cursors can be passed via the "),n("code",[e._v("before")]),e._v(" and "),n("code",[e._v("after")]),e._v("\nparameters to fetch events earlier in the log.")]),e._v(" "),n("p",[e._v("For example, this request:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2pzb25ycGMmcXVvdDs6ICZxdW90OzIuMCZxdW90OywKICAmcXVvdDtpZCZxdW90OzogMSwKICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O2V2ZW50cyZxdW90OywKICAmcXVvdDtwYXJhbXMmcXVvdDs6IHsKICAgICZxdW90O2ZpbHRlciZxdW90OzogewogICAgICAmcXVvdDtxdWVyeSZxdW90OzogJnF1b3Q7dG0uZXZlbnQgPSAnVHgnIEFORCBhcHAua2V5ID0gJ2FwcGxlc2F1Y2UnJnF1b3Q7CiAgICB9LAogICAgJnF1b3Q7bWF4SXRlbXMmcXVvdDs6IDEsCiAgICAmcXVvdDthZnRlciZxdW90OzogJnF1b3Q7JnF1b3Q7CiAgfQp9Cg=="}}),e._v(" "),n("p",[e._v("will return a result similar to the following:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2pzb25ycGMmcXVvdDs6ICZxdW90OzIuMCZxdW90OywKICAmcXVvdDtpZCZxdW90OzogMSwKICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICZxdW90O2l0ZW1zJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtjdXJzb3ImcXVvdDs6ICZxdW90OzE2ZWUzZDVlNjViZTUzZDgtMDNkNSZxdW90OywKICAgICAgICAmcXVvdDtldmVudCZxdW90OzogJnF1b3Q7VHgmcXVvdDssCiAgICAgICAgJnF1b3Q7ZGF0YSZxdW90OzogewogICAgICAgICAgJnF1b3Q7dHlwZSZxdW90OzogJnF1b3Q7dGVuZGVybWludC9ldmVudC9UeCZxdW90OywKICAgICAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiB7CiAgICAgICAgICAgICZxdW90O2hlaWdodCZxdW90OzogNzAsCiAgICAgICAgICAgICZxdW90O3R4JnF1b3Q7OiAmcXVvdDtZWEJ3YkdWellYVmpaVDF6ZVhKMWNBPT0mcXVvdDssCiAgICAgICAgICAgICZxdW90O3Jlc3VsdCZxdW90OzogewogICAgICAgICAgICAgICZxdW90O2V2ZW50cyZxdW90OzogWwogICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAmcXVvdDt0eXBlJnF1b3Q7OiAmcXVvdDthcHAmcXVvdDssCiAgICAgICAgICAgICAgICAgICZxdW90O2F0dHJpYnV0ZXMmcXVvdDs6IFsKICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O2NyZWF0b3ImcXVvdDssCiAgICAgICAgICAgICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7Q29zbW9zaGkgTmV0b3dva28mcXVvdDssCiAgICAgICAgICAgICAgICAgICAgICAmcXVvdDtpbmRleCZxdW90OzogdHJ1ZQogICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgJnF1b3Q7a2V5JnF1b3Q7OiAmcXVvdDtrZXkmcXVvdDssCiAgICAgICAgICAgICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7YXBwbGVzYXVjZSZxdW90OywKICAgICAgICAgICAgICAgICAgICAgICZxdW90O2luZGV4JnF1b3Q7OiB0cnVlCiAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O2luZGV4X2tleSZxdW90OywKICAgICAgICAgICAgICAgICAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiAmcXVvdDtpbmRleCBpcyB3b3JraW5nJnF1b3Q7LAogICAgICAgICAgICAgICAgICAgICAgJnF1b3Q7aW5kZXgmcXVvdDs6IHRydWUKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7bm9pbmRleF9rZXkmcXVvdDssCiAgICAgICAgICAgICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7aW5kZXggaXMgd29ya2luZyZxdW90OywKICAgICAgICAgICAgICAgICAgICAgICZxdW90O2luZGV4JnF1b3Q7OiBmYWxzZQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgXQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIF0KICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfQogICAgXSwKICAgICZxdW90O21vcmUmcXVvdDs6IGZhbHNlLAogICAgJnF1b3Q7b2xkZXN0JnF1b3Q7OiAmcXVvdDsxNmVlM2Q0YzQ3MWMzYjAwLTAwMDEmcXVvdDssCiAgICAmcXVvdDtuZXdlc3QmcXVvdDs6ICZxdW90OzE2ZWUzZDVmMmUwNWE0ZTAtMDQwMCZxdW90OwogIH0KfQo="}}),e._v(" "),n("p",[e._v("The "),n("code",[e._v('"items"')]),e._v(" array gives the matching items (up to the requested\n"),n("code",[e._v('"maxResults"')]),e._v(") in decreasing time order (i.e., newest to oldest).  In this\ncase, there is only one result, but if there are additional results that were\nnot returned, the "),n("code",[e._v('"more"')]),e._v(" flag will be true. Calling "),n("code",[e._v("/events")]),e._v(" again with the\nsame query and "),n("code",[e._v('"after"')]),e._v(" set to the cursor of the newest result (in this\nexample, "),n("code",[e._v('"16ee3d5e65be53d8-03d5"')]),e._v(") will fetch newer results.")]),e._v(" "),n("p",[e._v("Go clients can use the "),n("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/rpc/client/eventstream",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("eventstream")]),n("OutboundLink")],1),e._v(" package to simplify the use\nof this method. The "),n("code",[e._v("eventstream.Stream")]),e._v(" automatically handles polling for new\nevents, updating the cursor, and reporting any missed events.")]),e._v(" "),n("h2",{attrs:{id:"legacy-streaming-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#legacy-streaming-api"}},[e._v("#")]),e._v(" Legacy Streaming API")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Note:")]),e._v(" This API is deprecated in Tendermint v0.36, and will be removed in\nTendermint v0.37. New clients and existing use should use the "),n("a",{attrs:{href:"#event-log-api"}},[e._v("event log\nAPI")]),e._v(" instead. See "),n("a",{attrs:{href:"https://tinyurl.com/adr075",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 075"),n("OutboundLink")],1),e._v(" for more details.")])]),e._v(" "),n("p",[e._v("To subscribe to events in the streaming API, you must connect to the node RPC\nservice using a "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/WebSocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("websocket"),n("OutboundLink")],1),e._v(". From the command line you can use a tool such\nas "),n("a",{attrs:{href:"https://github.com/websockets/wscat",target:"_blank",rel:"noopener noreferrer"}},[e._v("wscat"),n("OutboundLink")],1),e._v(", for example:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"d3NjYXQgd3M6Ly8xMjcuMC4wLjE6MjY2NTcvd2Vic29ja2V0Cg=="}}),e._v(" "),n("p",[e._v("To subscribe to events, call the "),n("code",[e._v("subscribe")]),e._v(" JSON-RPC method method passing in\na "),n("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/internal/pubsub/query/syntax",target:"_blank",rel:"noopener noreferrer"}},[e._v("filter query"),n("OutboundLink")],1),e._v(" for the events you wish to receive:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2pzb25ycGMmcXVvdDs6ICZxdW90OzIuMCZxdW90OywKICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3N1YnNjcmliZSZxdW90OywKICAmcXVvdDtpZCZxdW90OzogMSwKICAmcXVvdDtwYXJhbXMmcXVvdDs6IHsKICAgICZxdW90O3F1ZXJ5JnF1b3Q7OiAmcXVvdDt0bS5ldmVudD0nTmV3QmxvY2snJnF1b3Q7CiAgfQp9Cg=="}}),e._v(" "),n("p",[e._v("The subscribe method returns an initial response confirming the subscription,\nthen sends additional JSON-RPC response messages containing the matching events\nas they are published. The subscription continues until either the client\nexplicitly cancels the subscription (by calling "),n("code",[e._v("unsubscribe")]),e._v(" or\n"),n("code",[e._v("unsubscribe_all")]),e._v(") or until the websocket connection is terminated.")])],1)}),[],!1,null,null,null);t.default=g.exports}}]);