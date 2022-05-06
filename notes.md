## Timimg Result | DoublerAppend | DoublerInsert

extraLargeArray | 8.015527 ms | 990.028725 ms
largeArray | 701.058 μs | 6.874889 ms
mediumArray | 303.732 μs| 347.442 μs
smallArray | 127.241 μs | 155.013 μs
tinyArray | 128.318 μs | 154.621 μs

DoublerAppend is a quicker function because instead of adding the new item to the front of the array and reindexing the rest of the arrray, it only needs to add it to the end and give it an index.
