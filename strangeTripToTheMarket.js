/* There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". */

//* My Solution:
function isLockNessMonster(s) {
	//FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
	return (
		s.includes('3.50') || s.includes('three fifty') || s.includes('tree fiddy')
	);
}
