(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{750:function(e,t,o){"use strict";o.r(t);var n=o(1),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"outline"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#abci-vs-abci"}},[e._v("ABCI++ vs. ABCI")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#method-overview"}},[e._v("Method overview")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#consensusblock-execution-methods"}},[e._v("Consensus/block execution methods")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#mempool-methods"}},[e._v("Mempool methods")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#info-methods"}},[e._v("Info methods")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#state-sync-methods"}},[e._v("State-sync methods")])])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#next-block-execution-vs-same-block-execution"}},[e._v("Next-block execution vs. same-block execution")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#tendermint-proposal-timeout"}},[e._v("Tendermint proposal timeout")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#deterministic-state-machine-replication"}},[e._v("Deterministic State-Machine Replication")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#events"}},[e._v("Events")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#evidence"}},[e._v("Evidence")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#errors"}},[e._v("Errors")])])]),e._v(" "),o("h1",{attrs:{id:"overview-and-basic-concepts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview-and-basic-concepts"}},[e._v("#")]),e._v(" Overview and basic concepts")]),e._v(" "),o("h2",{attrs:{id:"abci-vs-abci"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abci-vs-abci"}},[e._v("#")]),e._v(" ABCI++ vs. ABCI")]),e._v(" "),o("p",[o("a",{attrs:{href:"#outline"}},[e._v("↑ Back to Outline")])]),e._v(" "),o("p",[e._v("The Application's main role is to execute blocks decided (a.k.a. finalized) by consensus. The\ndecided blocks are the main consensus's ouput to the (replicated) Application. With ABCI, the\napplication only interacts with consensus at "),o("em",[e._v("decision")]),e._v(' time. This restricted mode of interaction\nprevents numerous features for the Application, including many scalability improvements that are\nnow better understood than when ABCI was first written. For example, many ideas proposed to improve\nscalability can be boiled down to "make the block proposers do work, so the network does not have\nto". This includes optimizations such as transaction level signature aggregation, state transition\nproofs, etc. Furthermore, many new security properties cannot be achieved in the current paradigm,\nas the Application cannot require validators to do more than executing the transactions contained in\nfinalized blocks. This includes features such as threshold cryptography, and guaranteed IBC\nconnection attempts.')]),e._v(" "),o("p",[e._v("ABCI++ addresses these limitations by allowing the application to intervene at three key places of\nconsensus execution: (a) at the moment a new proposal is to be created, (b) at the moment a\nproposal is to be validated, and (c) at the moment a (precommit) vote is sent/received. The new\ninterface allows block proposers to perform application-dependent work in a block through the\n"),o("code",[e._v("PrepareProposal")]),e._v(" method (a); validators to perform application-dependent work and checks in a\nproposed block through the "),o("code",[e._v("ProcessProposal")]),e._v(" method (b); and applications to require their validators\ndo more than just validate blocks through the "),o("code",[e._v("ExtendVote")]),e._v(" and "),o("code",[e._v("VerifyVoteExtension")]),e._v(" methods (c).\nFurthermore, ABCI++ coalesces {"),o("code",[e._v("BeginBlock")]),e._v(", ["),o("code",[e._v("DeliverTx")]),e._v("], "),o("code",[e._v("EndBlock")]),e._v("} into "),o("code",[e._v("FinalizeBlock")]),e._v(", as a\nsimplified, efficient way to deliver a decided block to the Application.")]),e._v(" "),o("h2",{attrs:{id:"method-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#method-overview"}},[e._v("#")]),e._v(" Method overview")]),e._v(" "),o("p",[o("a",{attrs:{href:"#outline"}},[e._v("↑ Back to Outline")])]),e._v(" "),o("p",[e._v("Methods can be classified into four categories: "),o("em",[e._v("consensus")]),e._v(", "),o("em",[e._v("mempool")]),e._v(", "),o("em",[e._v("info")]),e._v(", and "),o("em",[e._v("state-sync")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"consensus-block-execution-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consensus-block-execution-methods"}},[e._v("#")]),e._v(" Consensus/block execution methods")]),e._v(" "),o("p",[e._v("The first time a new blockchain is started, Tendermint calls "),o("code",[e._v("InitChain")]),e._v(". From then on, method\n"),o("code",[e._v("FinalizeBlock")]),e._v(" is executed upon the decision of each block, resulting in an updated Application\nstate. During the execution of an instance of consensus, which decides the block for a given\nheight, and before method "),o("code",[e._v("FinalizeBlock")]),e._v(" is called, methods "),o("code",[e._v("PrepareProposal")]),e._v(", "),o("code",[e._v("ProcessProposal")]),e._v(",\n"),o("code",[e._v("ExtendVote")]),e._v(", and "),o("code",[e._v("VerifyVoteExtension")]),e._v(" may be called several times. See\n"),o("RouterLink",{attrs:{to:"/spec/abci++/abci++_tmint_expected_behavior.html"}},[e._v("Tendermint's expected behavior")]),e._v(" for details on the possible\ncall sequences of these methods.")],1),e._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#initchain"}},[o("strong",[e._v("InitChain:")])]),e._v(" This method initializes the blockchain.\nTendermint calls it once upon genesis.")],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#prepareproposal"}},[o("strong",[e._v("PrepareProposal:")])]),e._v(" It allows the block\nproposer to perform application-dependent work in a block before proposing it.\nThis enables, for instance, batch optimizations to a block, which has been empirically\ndemonstrated to be a key component for improved performance. Method "),o("code",[e._v("PrepareProposal")]),e._v(" is called\nevery time Tendermint is about to broadcast a Proposal message, but no previous proposal has\nbeen locked at the Tendermint level. Tendermint gathers outstanding transactions from the\nmempool, generates a block header, and uses them to create a block to propose. Then, it calls\n"),o("code",[e._v("RequestPrepareProposal")]),e._v(" with the newly created proposal, called "),o("em",[e._v("raw proposal")]),e._v(". The Application\ncan make changes to the raw proposal, such as modifying transactions, and returns the\n(potentially) modified proposal, called "),o("em",[e._v("prepared proposal")]),e._v(" in the "),o("code",[e._v("ResponsePrepareProposal")]),e._v("\ncall. The logic modifying the raw proposal can be non-deterministic.")],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#processproposal"}},[o("strong",[e._v("ProcessProposal:")])]),e._v(" It allows a validator to\nperform application-dependent work in a proposed block. This enables features such as immediate\nblock execution, and allows the Application to reject invalid blocks.\nTendermint calls it when it receives a proposal and the Tendermint algorithm has not locked on a\nvalue. The Application cannot modify the proposal at this point but can reject it if it is\ninvalid. If that is the case, Tendermint will prevote "),o("code",[e._v("nil")]),e._v(" on the proposal, which has\nstrong liveness implications for Tendermint. As a general rule, the Application\nSHOULD accept a prepared proposal passed via "),o("code",[e._v("ProcessProposal")]),e._v(", even if a part of\nthe proposal is invalid (e.g., an invalid transaction); the Application can\nignore the invalid part of the prepared proposal at block execution time.")],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#extendvote"}},[o("strong",[e._v("ExtendVote:")])]),e._v(" It allows applications to force their\nvalidators to do more than just validate within consensus. "),o("code",[e._v("ExtendVote")]),e._v(" allows applications to\ninclude non-deterministic data, opaque to Tendermint, to precommit messages (the final round of\nvoting). The data, called "),o("em",[e._v("vote extension")]),e._v(", will be broadcast and received together with the\nvote it is extending, and will be made available to the Application in the next height,\nin the rounds where the local process is the proposer.\nTendermint calls "),o("code",[e._v("ExtendVote")]),e._v(" when it is about to send a non-"),o("code",[e._v("nil")]),e._v(" precommit message.\nIf the Application does not have vote extension information to provide at that time, it returns\na 0-length byte array as its vote extension.")],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#verifyvoteextension"}},[o("strong",[e._v("VerifyVoteExtension:")])]),e._v(" It allows\nvalidators to validate the vote extension data attached to a precommit message. If the validation\nfails, the whole precommit message will be deemed invalid and ignored by Tendermint.\nThis has a negative impact on Tendermint's liveness, i.e., if vote extensions repeatedly cannot be\nverified by correct validators, Tendermint may not be able to finalize a block even if sufficiently\nmany (+2/3) validators send precommit votes for that block. Thus, "),o("code",[e._v("VerifyVoteExtension")]),e._v("\nshould be used with special care.\nAs a general rule, an Application that detects an invalid vote extension SHOULD\naccept it in "),o("code",[e._v("ResponseVerifyVoteExtension")]),e._v(" and ignore it in its own logic. Tendermint calls it when\na process receives a precommit message with a (possibly empty) vote extension.")],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#finalizeblock"}},[o("strong",[e._v("FinalizeBlock:")])]),e._v(" It delivers a decided block to the\nApplication. The Application must execute the transactions in the block deterministically and\nupdate its state accordingly. Cryptographic commitments to the block and transaction results,\nreturned via the corresponding parameters in "),o("code",[e._v("ResponseFinalizeBlock")]),e._v(", are included in the header\nof the next block. Tendermint calls it when a new block is decided.")],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#commit"}},[o("strong",[e._v("Commit:")])]),e._v(" Instructs the Application to persist its\nstate. It is a fundamental part of Tendermint's crash-recovery mechanism that ensures the\nsynchronization between Tendermint and the Applicatin upon recovery. Tendermint calls it just after\nhaving persisted the data returned by "),o("code",[e._v("ResponseFinalizeBlock")]),e._v(". The Application can now discard\nany state or data except the one resulting from executing the transactions in the decided block.")],1)])]),e._v(" "),o("h3",{attrs:{id:"mempool-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mempool-methods"}},[e._v("#")]),e._v(" Mempool methods")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#checktx"}},[o("strong",[e._v("CheckTx:")])]),e._v(" This method allows the Application to validate\ntransactions. Validation can be stateless (e.g., checking signatures ) or stateful\n(e.g., account balances). The type of validation performed is up to the application. If a\ntransaction passes the validation, then Tendermint adds it to the mempool; otherwise the\ntransaction is discarded.\nTendermint calls it when it receives a new transaction either coming from an external\nuser (e.g., a client) or another node. Furthermore, Tendermint can be configured to call\nre-"),o("code",[e._v("CheckTx")]),e._v(" on all outstanding transactions in the mempool after calling "),o("code",[e._v("Commit")]),e._v("for a block.")],1)]),e._v(" "),o("h3",{attrs:{id:"info-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#info-methods"}},[e._v("#")]),e._v(" Info methods")]),e._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#info"}},[o("strong",[e._v("Info:")])]),e._v(" Used to sync Tendermint with the Application during a\nhandshake that happens upon recovery, or on startup when state-sync is used.")],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#query"}},[o("strong",[e._v("Query:")])]),e._v(" This method can be used to query the Application for\ninformation about the application state.")],1)])]),e._v(" "),o("h3",{attrs:{id:"state-sync-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#state-sync-methods"}},[e._v("#")]),e._v(" State-sync methods")]),e._v(" "),o("p",[e._v("State sync allows new nodes to rapidly bootstrap by discovering, fetching, and applying\nstate machine (application) snapshots instead of replaying historical blocks. For more details, see the\n"),o("RouterLink",{attrs:{to:"/spec/p2p/messages/state-sync.html"}},[e._v("state sync documentation")]),e._v(".")],1),e._v(" "),o("p",[e._v("New nodes discover and request snapshots from other nodes in the P2P network.\nA Tendermint node that receives a request for snapshots from a peer will call\n"),o("code",[e._v("ListSnapshots")]),e._v(" on its Application. The Application returns the list of locally available\nsnapshots.\nNote that the list does not contain the actual snapshots but metadata about them: height at which\nthe snapshot was taken, application-specific verification data and more (see\n"),o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#snapshot"}},[e._v("snapshot data type")]),e._v(" for more details). After receiving a\nlist of available snapshots from a peer, the new node can offer any of the snapshots in the list to\nits local Application via the "),o("code",[e._v("OfferSnapshot")]),e._v(" method. The Application can check at this point the\nvalidity of the snapshot metadata.")],1),e._v(" "),o("p",[e._v('Snapshots may be quite large and are thus broken into smaller "chunks" that can be\nassembled into the whole snapshot. Once the Application accepts a snapshot and\nbegins restoring it, Tendermint will fetch snapshot "chunks" from existing nodes.\nThe node providing "chunks" will fetch them from its local Application using\nthe '),o("code",[e._v("LoadSnapshotChunk")]),e._v(" method.")]),e._v(" "),o("p",[e._v('As the new node receives "chunks" it will apply them sequentially to the local\napplication with '),o("code",[e._v("ApplySnapshotChunk")]),e._v(". When all chunks have been applied, the\nApplication's "),o("code",[e._v("AppHash")]),e._v(" is retrieved via an "),o("code",[e._v("Info")]),e._v(" query.\nTo ensure that the sync proceeded correctly, Tendermint compares the local Application's "),o("code",[e._v("AppHash")]),e._v("\nto the "),o("code",[e._v("AppHash")]),e._v(" stored on the blockchain (verified via\n"),o("RouterLink",{attrs:{to:"/spec/light-client/verification/"}},[e._v("light client verification")]),e._v(").")],1),e._v(" "),o("p",[e._v("In summary:")]),e._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#listsnapshots"}},[o("strong",[e._v("ListSnapshots:")])]),e._v(" Used by nodes to discover available\nsnapshots on peers.")],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#offersnapshot"}},[o("strong",[e._v("OfferSnapshot:")])]),e._v(" When a node receives a snapshot from a\npeer, Tendermint uses this method to offer the snapshot to the Application.")],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#loadsnapshotchunk"}},[o("strong",[e._v("LoadSnapshotChunk:")])]),e._v(" Used by Tendermint to retrieve\nsnapshot chunks from the Application to send to peers.")],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#applysnapshotchunk"}},[o("strong",[e._v("ApplySnapshotChunk:")])]),e._v(" Used by Tendermint to hand\nsnapshot chunks to the Application.")],1)])]),e._v(" "),o("h3",{attrs:{id:"other-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-methods"}},[e._v("#")]),e._v(" Other methods")]),e._v(" "),o("p",[e._v("Additionally, there is a "),o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#flush"}},[o("strong",[e._v("Flush")])]),e._v(" method that is called on every connection,\nand an "),o("RouterLink",{attrs:{to:"/spec/abci++/abci++_methods.html#echo"}},[o("strong",[e._v("Echo")])]),e._v(" method that is used for debugging.")],1),e._v(" "),o("p",[e._v("More details on managing state across connections can be found in the section on\n"),o("RouterLink",{attrs:{to:"/spec/abci++/abci%2B%2B_app_requirements.html#managing-the-application-state-and-related-topics"}},[e._v("Managing Application State")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"next-block-execution-vs-same-block-execution"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-block-execution-vs-same-block-execution"}},[e._v("#")]),e._v(" Next-block execution vs. same-block execution")]),e._v(" "),o("p",[o("a",{attrs:{href:"#outline"}},[e._v("↑ Back to Outline")])]),e._v(" "),o("p",[e._v("In the original ABCI protocol, the only moment when the Application had access to a\nblock was after it was decided. This led to a block execution model, called "),o("em",[e._v("next-block\nexecution")]),e._v(", where some fields hashed in a block header refer to the execution of the\nprevious block, namely:")]),e._v(" "),o("ul",[o("li",[e._v("the Merkle root of the Application's state")]),e._v(" "),o("li",[e._v("the transaction results")]),e._v(" "),o("li",[e._v("the consensus parameter updates")]),e._v(" "),o("li",[e._v("the validator updates")])]),e._v(" "),o("p",[e._v("With ABCI++, an Application may be configured to keep using the next-block execution model, by\nexecuting the decided block in "),o("code",[e._v("FinalizeBlock")]),e._v(". However, the new methods introduced —\n"),o("code",[e._v("PrepareProposal")]),e._v(" and "),o("code",[e._v("ProcessProposal")]),e._v(" — disclose the entire proposed block to the\nApplication, allowing for its immediate exectution. An Application implementing immediate execution\nmay additionally wish to store certain data resulting from the block's execution in the same block\nthat has just been executed. This brings about a new execution model, called\n"),o("em",[e._v("same-block execution")]),e._v(". An Application implementing this execution model, upon receiving a raw\nproposal via "),o("code",[e._v("RequestPrepareProposal")]),e._v(" and potentially modifying its transaction list, fully\nexecutes the resulting prepared proposal as though it was the decided block (immediate execution),\nand the results of the block execution are used as follows:")]),e._v(" "),o("ul",[o("li",[e._v("The block execution may generate a set of events. The Application should store these events and\nreturn them back to Tendermint during the "),o("code",[e._v("FinalizeBlock")]),e._v(" call if the block is finally decided.")]),e._v(" "),o("li",[e._v("The Merkle root resulting from executing the prepared proposal is provided in\n"),o("code",[e._v("ResponsePrepareProposal")]),e._v(" and thus refers to the "),o("strong",[e._v("current block")]),e._v(". Tendermint\nwill use it in the prepared proposal's header.")]),e._v(" "),o("li",[e._v("Likewise, the transaction results from executing the prepared proposal are\nprovided in "),o("code",[e._v("ResponsePrepareProposal")]),e._v(" and refer to the transactions in the\n"),o("strong",[e._v("current block")]),e._v(". Tendermint will use them to calculate the results hash\nin the prepared proposal's header.")]),e._v(" "),o("li",[e._v("The consensus parameter updates and validator updates are also provided in\n"),o("code",[e._v("ResponsePrepareProposal")]),e._v(" and reflect the result of the prepared proposal's\nexecution. They come into force in height H+1 (as opposed to the H+2 rule\nin next-block execution model).")])]),e._v(" "),o("p",[e._v("If the Application is configured to keep the next-block execution model, it will not\nprovide any data in "),o("code",[e._v("ResponsePrepareProposal")]),e._v(", other than a potentially modified\ntransaction list. The Application may nevertheless choose to perform immediate execution even in\nnext-block execution mode, however same-block execution mode "),o("em",[e._v("requires")]),e._v(" immediate execution.")]),e._v(" "),o("p",[e._v("The long term plan is for the execution model to be set in a new boolean parameter "),o("em",[e._v("same_block")]),e._v(" in\n"),o("code",[e._v("ConsensusParams")]),e._v(". Once this parameter is introduced,  it "),o("strong",[e._v("must not")]),e._v(" be changed once the\nblockchain has started, unless the Application developers "),o("em",[e._v("really")]),e._v(" know what they are doing.\nHowever, modifying "),o("code",[e._v("ConsensusParams")]),e._v(" structure cannot be done lightly if we are to\npreserve blockchain compatibility. Therefore we need an interim solution until\nsoft upgrades are specified and implemented in Tendermint. This somewhat "),o("em",[e._v("unsafe")]),e._v("\nsolution consists in Tendermint assuming same-block execution if the Application\nfills the above mentioned fields in "),o("code",[e._v("ResponsePrepareProposal")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"tendermint-proposal-timeout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-proposal-timeout"}},[e._v("#")]),e._v(" Tendermint proposal timeout")]),e._v(" "),o("p",[e._v("Immediate execution requires the Application to fully execute the prepared block\nbefore returning from "),o("code",[e._v("PrepareProposal")]),e._v(", this means that Tendermint cannot make progress\nduring the block execution.\nThis stands on Tendermint's critical path: if the Application takes a long time\nexecuting the block, the default value of "),o("em",[e._v("TimeoutPropose")]),e._v(" might not be sufficient\nto accommodate the long block execution time and non-proposer nodes might time\nout and prevote "),o("code",[e._v("nil")]),e._v(". The proposal, in this case, will probably be rejected and a new round will be necessary.")]),e._v(" "),o("p",[e._v("The Application is the best suited to provide a value for "),o("em",[e._v("TimeoutPropose")]),e._v(" so\nthat the block execution time upon "),o("code",[e._v("PrepareProposal")]),e._v(" fits well in the propose\ntimeout interval. Thus, the Application can adapt the value of "),o("em",[e._v("TimeoutPropose")]),e._v(" at every height via\n"),o("code",[e._v("TimeoutParams.Propose")]),e._v(", contained in "),o("code",[e._v("ConsensusParams")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"deterministic-state-machine-replication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deterministic-state-machine-replication"}},[e._v("#")]),e._v(" Deterministic State-Machine Replication")]),e._v(" "),o("p",[o("a",{attrs:{href:"#outline"}},[e._v("↑ Back to Outline")])]),e._v(" "),o("p",[e._v("ABCI++ applications must implement deterministic finite-state machines to be\nsecurely replicated by the Tendermint consensus engine. This means block execution\nmust be strictly deterministic: given the same\nordered set of transactions, all nodes will compute identical responses, for all\nsuccessive "),o("code",[e._v("FinalizeBlock")]),e._v(" calls. This is critical because the\nresponses are included in the header of the next block, either via a Merkle root\nor directly, so all nodes must agree on exactly what they are.")]),e._v(" "),o("p",[e._v("For this reason, it is recommended that application state is not exposed to any\nexternal user or process except via the ABCI connections to a consensus engine\nlike Tendermint Core. The Application must only change its state based on input\nfrom block execution ("),o("code",[e._v("FinalizeBlock")]),e._v(" calls), and not through\nany other kind of request. This is the only way to ensure all nodes see the same\ntransactions and compute the same results.")]),e._v(" "),o("p",[e._v("Some Applications may choose to implement immediate execution, which entails executing the blocks\nthat are about to be proposed (via "),o("code",[e._v("PrepareProposal")]),e._v("), and those that the Application is asked to\nvalidate (via "),o("code",[e._v("ProcessProposal")]),e._v("). However, the state changes caused by processing those\nproposed blocks must never replace the previous state until "),o("code",[e._v("FinalizeBlock")]),e._v(" confirms\nthe block decided.")]),e._v(" "),o("p",[e._v("Additionally, vote extensions or the validation thereof (via "),o("code",[e._v("ExtendVote")]),e._v(" or\n"),o("code",[e._v("VerifyVoteExtension")]),e._v(") must "),o("em",[e._v("never")]),e._v(" have side effects on the current state.\nThey can only be used when their data is provided in a "),o("code",[e._v("RequestPrepareProposal")]),e._v(" call.")]),e._v(" "),o("p",[e._v("If there is some non-determinism in the state machine, consensus will eventually\nfail as nodes disagree over the correct values for the block header. The\nnon-determinism must be fixed and the nodes restarted.")]),e._v(" "),o("p",[e._v("Sources of non-determinism in applications may include:")]),e._v(" "),o("ul",[o("li",[e._v("Hardware failures\n"),o("ul",[o("li",[e._v("Cosmic rays, overheating, etc.")])])]),e._v(" "),o("li",[e._v("Node-dependent state\n"),o("ul",[o("li",[e._v("Random numbers")]),e._v(" "),o("li",[e._v("Time")])])]),e._v(" "),o("li",[e._v("Underspecification\n"),o("ul",[o("li",[e._v("Library version changes")]),e._v(" "),o("li",[e._v("Race conditions")]),e._v(" "),o("li",[e._v("Floating point numbers")]),e._v(" "),o("li",[e._v("JSON or protobuf serialization")]),e._v(" "),o("li",[e._v("Iterating through hash-tables/maps/dictionaries")])])]),e._v(" "),o("li",[e._v("External Sources\n"),o("ul",[o("li",[e._v("Filesystem")]),e._v(" "),o("li",[e._v("Network calls (eg. some external REST API service)")])])])]),e._v(" "),o("p",[e._v("See "),o("a",{attrs:{href:"https://github.com/tendermint/abci/issues/56",target:"_blank",rel:"noopener noreferrer"}},[e._v("#56"),o("OutboundLink")],1),e._v(" for the original discussion.")]),e._v(" "),o("p",[e._v("Note that some methods ("),o("code",[e._v("Query, FinalizeBlock")]),e._v(") return non-deterministic data in the form\nof "),o("code",[e._v("Info")]),e._v(" and "),o("code",[e._v("Log")]),e._v(" fields. The "),o("code",[e._v("Log")]),e._v(" is intended for the literal output from the Application's\nlogger, while the "),o("code",[e._v("Info")]),e._v(" is any additional info that should be returned. These are the only fields\nthat are not included in block header computations, so we don't need agreement\non them. All other fields in the "),o("code",[e._v("Response*")]),e._v(" must be strictly deterministic.")]),e._v(" "),o("h2",{attrs:{id:"events"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),o("p",[o("a",{attrs:{href:"#outline"}},[e._v("↑ Back to Outline")])]),e._v(" "),o("p",[e._v("Method "),o("code",[e._v("FinalizeBlock")]),e._v(" includes an "),o("code",[e._v("events")]),e._v(" field at the top level in its\n"),o("code",[e._v("Response*")]),e._v(", and one "),o("code",[e._v("events")]),e._v(" field per transaction included in the block.\nApplications may respond to this ABCI++ method with an event list for each executed\ntransaction, and a general event list for the block itself.\nEvents allow applications to associate metadata with transactions and blocks.\nEvents returned via "),o("code",[e._v("FinalizeBlock")]),e._v(" do not impact Tendermint consensus in any way\nand instead exist to power subscriptions and queries of Tendermint state.")]),e._v(" "),o("p",[e._v("An "),o("code",[e._v("Event")]),e._v(" contains a "),o("code",[e._v("type")]),e._v(" and a list of "),o("code",[e._v("EventAttributes")]),e._v(", which are key-value\nstring pairs denoting metadata about what happened during the method's (or transaction's)\nexecution. "),o("code",[e._v("Event")]),e._v(" values can be used to index transactions and blocks according to what\nhappened during their execution.")]),e._v(" "),o("p",[e._v("Each event has a "),o("code",[e._v("type")]),e._v(" which is meant to categorize the event for a particular\n"),o("code",[e._v("Response*")]),e._v(" or "),o("code",[e._v("Tx")]),e._v(". A "),o("code",[e._v("Response*")]),e._v(" or "),o("code",[e._v("Tx")]),e._v(" may contain multiple events with duplicate\n"),o("code",[e._v("type")]),e._v(" values, where each distinct entry is meant to categorize attributes for a\nparticular event. Every key and value in an event's attributes must be UTF-8\nencoded strings along with the event type itself.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBFdmVudCB7CiAgc3RyaW5nICAgICAgICAgICAgICAgICAgdHlwZSAgICAgICA9IDE7CiAgcmVwZWF0ZWQgRXZlbnRBdHRyaWJ1dGUgYXR0cmlidXRlcyA9IDI7Cn0K"}}),e._v(" "),o("p",[e._v("The attributes of an "),o("code",[e._v("Event")]),e._v(" consist of a "),o("code",[e._v("key")]),e._v(", a "),o("code",[e._v("value")]),e._v(", and an "),o("code",[e._v("index")]),e._v(" flag. The\nindex flag notifies the Tendermint indexer to index the attribute. The value of\nthe "),o("code",[e._v("index")]),e._v(" flag is non-deterministic and may vary across different nodes in the network.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBFdmVudEF0dHJpYnV0ZSB7CiAgYnl0ZXMga2V5ICAgPSAxOwogIGJ5dGVzIHZhbHVlID0gMjsKICBib29sICBpbmRleCA9IDM7ICAvLyBub25kZXRlcm1pbmlzdGljCn0K"}}),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"IGFiY2kuUmVzcG9uc2VGaW5hbGl6ZUJsb2NrewogIC8vIC4uLgogRXZlbnRzOiBbXWFiY2kuRXZlbnR7CiAgewogICBUeXBlOiAmcXVvdDt2YWxpZGF0b3IucHJvdmlzaW9ucyZxdW90OywKICAgQXR0cmlidXRlczogW11hYmNpLkV2ZW50QXR0cmlidXRlewogICAgYWJjaS5FdmVudEF0dHJpYnV0ZXtLZXk6IFtdYnl0ZSgmcXVvdDthZGRyZXNzJnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDsuLi4mcXVvdDspLCBJbmRleDogdHJ1ZX0sCiAgICBhYmNpLkV2ZW50QXR0cmlidXRle0tleTogW11ieXRlKCZxdW90O2Ftb3VudCZxdW90OyksIFZhbHVlOiBbXWJ5dGUoJnF1b3Q7Li4uJnF1b3Q7KSwgSW5kZXg6IHRydWV9LAogICAgYWJjaS5FdmVudEF0dHJpYnV0ZXtLZXk6IFtdYnl0ZSgmcXVvdDtiYWxhbmNlJnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDsuLi4mcXVvdDspLCBJbmRleDogdHJ1ZX0sCiAgIH0sCiAgfSwKICB7CiAgIFR5cGU6ICZxdW90O3ZhbGlkYXRvci5wcm92aXNpb25zJnF1b3Q7LAogICBBdHRyaWJ1dGVzOiBbXWFiY2kuRXZlbnRBdHRyaWJ1dGV7CiAgICBhYmNpLkV2ZW50QXR0cmlidXRle0tleTogW11ieXRlKCZxdW90O2FkZHJlc3MmcXVvdDspLCBWYWx1ZTogW11ieXRlKCZxdW90Oy4uLiZxdW90OyksIEluZGV4OiB0cnVlfSwKICAgIGFiY2kuRXZlbnRBdHRyaWJ1dGV7S2V5OiBbXWJ5dGUoJnF1b3Q7YW1vdW50JnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDsuLi4mcXVvdDspLCBJbmRleDogZmFsc2V9LAogICAgYWJjaS5FdmVudEF0dHJpYnV0ZXtLZXk6IFtdYnl0ZSgmcXVvdDtiYWxhbmNlJnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDsuLi4mcXVvdDspLCBJbmRleDogZmFsc2V9LAogICB9LAogIH0sCiAgewogICBUeXBlOiAmcXVvdDt2YWxpZGF0b3Iuc2xhc2hlZCZxdW90OywKICAgQXR0cmlidXRlczogW11hYmNpLkV2ZW50QXR0cmlidXRlewogICAgYWJjaS5FdmVudEF0dHJpYnV0ZXtLZXk6IFtdYnl0ZSgmcXVvdDthZGRyZXNzJnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDsuLi4mcXVvdDspLCBJbmRleDogZmFsc2V9LAogICAgYWJjaS5FdmVudEF0dHJpYnV0ZXtLZXk6IFtdYnl0ZSgmcXVvdDthbW91bnQmcXVvdDspLCBWYWx1ZTogW11ieXRlKCZxdW90Oy4uLiZxdW90OyksIEluZGV4OiB0cnVlfSwKICAgIGFiY2kuRXZlbnRBdHRyaWJ1dGV7S2V5OiBbXWJ5dGUoJnF1b3Q7cmVhc29uJnF1b3Q7KSwgVmFsdWU6IFtdYnl0ZSgmcXVvdDsuLi4mcXVvdDspLCBJbmRleDogdHJ1ZX0sCiAgIH0sCiAgfSwKICAvLyAuLi4KIH0sCn0K"}}),e._v(" "),o("h2",{attrs:{id:"evidence"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#evidence"}},[e._v("#")]),e._v(" Evidence")]),e._v(" "),o("p",[o("a",{attrs:{href:"#outline"}},[e._v("↑ Back to Outline")])]),e._v(" "),o("p",[e._v("Tendermint's security model relies on the use of evidences of misbehavior. An evidence is an\nirrefutable proof of malicious behavior by a network participant. It is the responsibility of\nTendermint to detect such malicious behavior. When malicious behavior is detected, Tendermint\nwill gossip evidences of misbehavior to other nodes and commit the evidences to\nthe chain once they are verified by a subset of validators. These evidences will then be\npassed on to the Application through ABCI++. It is the responsibility of the\nApplication to handle evidence of misbehavior and exercise punishment.")]),e._v(" "),o("p",[e._v("There are two forms of evidence: Duplicate Vote and Light Client Attack. More\ninformation can be found in either "),o("RouterLink",{attrs:{to:"/spec/core/data_structures.html"}},[e._v("data structures")]),e._v("\nor "),o("RouterLink",{attrs:{to:"/spec/light-client/accountability/"}},[e._v("accountability")]),e._v(".")],1),e._v(" "),o("p",[e._v("EvidenceType has the following protobuf format:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"ZW51bSBFdmlkZW5jZVR5cGUgewogIFVOS05PV04gICAgICAgICAgICAgICA9IDA7CiAgRFVQTElDQVRFX1ZPVEUgICAgICAgID0gMTsKICBMSUdIVF9DTElFTlRfQVRUQUNLICAgPSAyOwp9Cg=="}}),e._v(" "),o("h2",{attrs:{id:"errors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),o("p",[o("a",{attrs:{href:"#outline"}},[e._v("↑ Back to Outline")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Query")]),e._v(", and "),o("code",[e._v("CheckTx")]),e._v(" methods include a "),o("code",[e._v("Code")]),e._v(" field in their "),o("code",[e._v("Response*")]),e._v(".\nField "),o("code",[e._v("Code")]),e._v(" is meant to contain an application-specific response code.\nA response code of "),o("code",[e._v("0")]),e._v(" indicates no error.  Any other response code\nindicates to Tendermint that an error occurred.")]),e._v(" "),o("p",[e._v("These methods also return a "),o("code",[e._v("Codespace")]),e._v(" string to Tendermint. This field is\nused to disambiguate "),o("code",[e._v("Code")]),e._v(" values returned by different domains of the\nApplication. The "),o("code",[e._v("Codespace")]),e._v(" is a namespace for the "),o("code",[e._v("Code")]),e._v(".")]),e._v(" "),o("p",[e._v("Methods "),o("code",[e._v("Echo")]),e._v(", "),o("code",[e._v("Info")]),e._v(", and "),o("code",[e._v("InitChain")]),e._v(" do not return errors.\nAn error in any of these methods represents a critical issue that Tendermint\nhas no reasonable way to handle. If there is an error in one\nof these methods, the Application must crash to ensure that the error is safely\nhandled by an operator.")]),e._v(" "),o("p",[e._v("Method "),o("code",[e._v("FinalizeBlock")]),e._v(" is a special case. It contains a number of\n"),o("code",[e._v("Code")]),e._v(" and "),o("code",[e._v("Codespace")]),e._v(" fields as part of type "),o("code",[e._v("ExecTxResult")]),e._v(". Each of\nthese codes reports errors related to the transaction it is attached to.\nHowever, "),o("code",[e._v("FinalizeBlock")]),e._v(" does not return errors at the top level, so the\nsame considerations on critical issues made for "),o("code",[e._v("Echo")]),e._v(", "),o("code",[e._v("Info")]),e._v(", and\n"),o("code",[e._v("InitChain")]),e._v(" also apply here.")]),e._v(" "),o("p",[e._v("The handling of non-zero response codes by Tendermint is described below.")]),e._v(" "),o("h3",{attrs:{id:"checktx"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#checktx"}},[e._v("#")]),e._v(" "),o("code",[e._v("CheckTx")])]),e._v(" "),o("p",[e._v("When Tendermint receives a "),o("code",[e._v("ResponseCheckTx")]),e._v(" with a non-zero "),o("code",[e._v("Code")]),e._v(", the associated\ntransaction will not be added to Tendermint's mempool or it will be removed if\nit is already included.")]),e._v(" "),o("h3",{attrs:{id:"exectxresult-as-part-of-finalizeblock"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exectxresult-as-part-of-finalizeblock"}},[e._v("#")]),e._v(" "),o("code",[e._v("ExecTxResult")]),e._v(" (as part of "),o("code",[e._v("FinalizeBlock")]),e._v(")")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("ExecTxResult")]),e._v(" type delivers transaction results from the Application to Tendermint. When\nTendermint receives a "),o("code",[e._v("ResponseFinalizeBlock")]),e._v(" containing an "),o("code",[e._v("ExecTxResult")]),e._v(" with a non-zero "),o("code",[e._v("Code")]),e._v(",\nthe response code is logged. Past "),o("code",[e._v("Code")]),e._v(" values can be queried by clients. As the transaction was\npart of a decided block, the "),o("code",[e._v("Code")]),e._v(" does not influence Tendermint consensus.")]),e._v(" "),o("h3",{attrs:{id:"query"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[e._v("#")]),e._v(" "),o("code",[e._v("Query")])]),e._v(" "),o("p",[e._v("When Tendermint receives a "),o("code",[e._v("ResponseQuery")]),e._v(" with a non-zero "),o("code",[e._v("Code")]),e._v(", this code is\nreturned directly to the client that initiated the query.")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);