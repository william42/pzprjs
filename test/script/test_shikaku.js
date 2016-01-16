/* test_shikaku.js */

ui.debug.addDebugData('shikaku', {
	url : '6/6/j3g56h6t6h23g5j',
	failcheck : [
		['bkNoNum',  "pzprv3/shikaku/6/6/. . . . 3 . /5 6 . . 6 . /. . . . . . /. . . . . . /. 6 . . 2 3 /. 5 . . . . /0 0 0 0 0 /0 1 0 1 0 /0 1 0 1 0 /0 1 0 1 0 /0 0 0 0 0 /0 0 0 0 0 /0 0 1 1 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 1 1 0 0 /0 0 0 0 0 0 /"],
		['bkNumGe2', "pzprv3/shikaku/6/6/. . . . 3 . /5 6 . . 6 . /. . . . . . /. . . . . . /. 6 . . 2 3 /. 5 . . . . /0 0 0 0 0 /1 0 0 0 0 /1 0 0 0 0 /1 0 0 0 0 /1 0 0 0 0 /0 -1 -1 -1 0 /0 0 0 0 0 0 /-1 0 0 0 0 0 /-1 0 0 0 0 0 /-1 0 0 0 0 0 /0 1 1 1 1 0 /"],
		['bkNotRect',"pzprv3/shikaku/6/6/. . . . 3 . /5 6 . . 6 . /. . . . . . /. . . . . . /. 6 . . 2 3 /. 5 . . . . /0 1 1 0 0 /1 0 1 0 0 /1 0 1 0 0 /1 -1 1 0 1 /1 -1 1 0 1 /0 -1 -1 -1 1 /0 1 0 1 1 1 /-1 0 0 0 0 0 /-1 1 1 1 1 1 /-1 -1 -1 0 0 0 /1 1 1 1 1 0 /"],
		['bkSizeNe', "pzprv3/shikaku/6/6/. . . . 3 . /5 6 . . 6 . /. . . . . . /. . . . . . /. 6 . . 2 3 /. 5 . . . . /1 0 1 0 0 /1 0 1 0 0 /1 0 1 0 0 /1 -1 1 0 1 /1 -1 1 0 1 /0 -1 -1 -1 1 /0 0 0 1 1 1 /-1 1 1 0 0 0 /-1 0 0 1 1 1 /-1 -1 -1 0 0 0 /1 1 1 1 1 0 /"],
		['bdDeadEnd',"pzprv3/shikaku/6/6/. . . . 3 . /5 6 . . 6 . /. . . . . . /. . . . . . /. 6 . . 2 3 /. 5 . . . . /1 0 1 0 0 /1 0 1 0 0 /1 0 1 0 0 /1 -1 0 1 1 /1 -1 1 1 1 /0 -1 -1 -1 1 /0 0 0 1 1 1 /-1 0 0 0 0 0 /-1 1 1 1 1 1 /-1 -1 -1 0 0 0 /1 1 1 1 1 0 /"],
		[null,       "pzprv3/shikaku/6/6/. . . . 3 . /5 6 . . 6 . /. . . . . . /. . . . . . /. 6 . . 2 3 /. 5 . . . . /1 -1 1 0 0 /1 0 1 0 0 /1 -1 1 0 0 /1 -1 0 1 1 /1 -1 0 1 1 /0 -1 -1 -1 1 /0 -1 -1 1 1 1 /-1 -1 -1 0 0 0 /-1 1 1 1 1 1 /-1 -1 -1 0 0 0 /1 1 1 1 1 0 /"]
	],
	inputs : [
		/* 問題入力テストはlitsと同じなので省略 */
		/* 回答入力テスト */
		{ input:["playmode", "newboard,4,4"] },
		{ input:["mouse,left, 4,0, 4,4, 2,4, 2,6", "mouse,left, 0,6, 6,6, 6,2, 8,2"],
		  result:"pzprv3/shikaku/4/4/. . . . /. . . . /. . . . /. . . . /0 1 0 /0 1 1 /1 0 1 /0 0 0 /0 0 0 1 /0 1 0 0 /1 1 1 0 /" },
		{ input:["mouse,left, 4,0, 4,4, 2,4, 2,6"],
		  result:"pzprv3/shikaku/4/4/. . . . /. . . . /. . . . /. . . . /0 0 0 /0 0 1 /0 0 1 /0 0 0 /0 0 0 1 /0 0 0 0 /1 1 1 0 /" },
		{ input:["mouse,right, 1,1, 1,3, 5,3"],
		  result:"pzprv3/shikaku/4/4/. . . . /. . . . /. . . . /. . . . /0 0 0 /-1 -1 1 /0 0 1 /0 0 0 /-1 0 0 1 /0 0 0 0 /1 1 1 0 /" },
		{ input:["mouse,right, 1,1, 1,3, 3,3"],
		  result:"pzprv3/shikaku/4/4/. . . . /. . . . /. . . . /. . . . /0 0 0 /0 -1 1 /0 0 1 /0 0 0 /0 0 0 1 /0 0 0 0 /1 1 1 0 /" }
	]
});