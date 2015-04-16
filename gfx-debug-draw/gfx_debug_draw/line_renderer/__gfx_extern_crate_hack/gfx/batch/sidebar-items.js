initSidebarItems({"enum":[["Error","An error occurring at batch creation"]],"struct":[["Context","Factory of ref batches, required to always be used with them."],["CoreBatch","Referenced core - a minimal sealed batch that depends on `Context`. It has references to the resources (mesh, program, state), that are held by the context that created the batch, so these have to be used together."],["OutOfBounds","Error accessing outside of the array"],["OwnedBatch","Owned batch - self-contained, but has heap-allocated data"],["RefBatch","An expanded version of the `CoreBatch`, carrying the parameters and the mesh slice with it, publicly mutable."]],"type":[["BatchData",""],["CoreBatchFull",""],["ImplicitBatch",""],["RefBatchFull",""]],"trait":[["Batch","Abstract batch trait"]],"fn":[["bind","Create an implicit batch"]]});