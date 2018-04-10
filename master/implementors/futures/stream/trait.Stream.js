(function() {var implementors = {};
implementors["hyper"] = ["impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"hyper/body/struct.Body.html\" title=\"struct hyper::body::Body\">Body</a>","impl&lt;I, S, B&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"hyper/server/struct.Serve.html\" title=\"struct hyper::server::Serve\">Serve</a>&lt;I, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"type\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.6/tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.6/tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"hyper/server/trait.NewService.html\" title=\"trait hyper::server::NewService\">NewService</a>&lt;Request = <a class=\"struct\" href=\"hyper/struct.Request.html\" title=\"struct hyper::Request\">Request</a>&lt;<a class=\"struct\" href=\"hyper/body/struct.Body.html\" title=\"struct hyper::body::Body\">Body</a>&gt;, Response = <a class=\"struct\" href=\"hyper/struct.Response.html\" title=\"struct hyper::Response\">Response</a>&lt;B&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"hyper/server/trait.NewService.html#associatedtype.Error\" title=\"type hyper::server::NewService::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hyper/body/trait.Payload.html\" title=\"trait hyper::body::Payload\">Payload</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"hyper/server/struct.AddrIncoming.html\" title=\"struct hyper::server::AddrIncoming\">AddrIncoming</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
