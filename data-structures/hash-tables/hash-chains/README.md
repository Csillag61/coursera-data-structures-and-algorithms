## Hashing with chains
In this task your goal is to implement a hash table with lists chaining. You are already given the
number of buckets 𝑚 and the hash function. It is a polynomial hash function
where 𝑆[𝑖] is the ASCII code of the 𝑖-th symbol of 𝑆, 𝑝 = 1 000 000 007 and 𝑥 = 263. Your program
should support the following kinds of queries:
- **add** string — insert string into the table. If there is already such string in the hash table, then
just ignore the query.
- **del** string — remove string from the table. If there is no such string in the hash table, then
just ignore the query.
- **find** string — output “yes" or “no" (without quotes) depending on whether the table contains
string or not.
- **check** 𝑖 — output the content of the 𝑖-th list in the table. Use spaces to separate the elements of
the list. If 𝑖-th list is empty, output a blank line.

When inserting a new string into a hash chain, you must insert it in the beginning of the chain.

### Input Format
There is a single integer 𝑚 in the first line — the number of buckets you should have. The
next line contains the number of queries 𝑁. It’s followed by 𝑁 lines, each of them contains one query
in the format described above.

### Output Format
Print the result of each of the find and check queries, one result per line, in the same
order as these queries are given in the input.

### Sample 1
Input | Output
--- | ---
5 | HellO world
12 | no
add world | yes
add HellO | HellO
check 4 | GooD luck
find World |
find world |
del world |
check 4 |
del HellO |
add luck |
add GooD |
check 2 |
del good |

Explanation:<br>
The ASCII code of ’w’ is 119, for ’o’ it is 111, for ’r’ it is 114, for ’l’ it is 108, and for ’d’ it is 100. Thus,
ℎ(“world") = (119+111×263+114×2632 +108×2633 +100×2634 mod 1 000 000 007) mod 5 = 4.
It turns out that the hash value of 𝐻𝑒𝑙𝑙𝑂 is also 4. Recall that we always insert in the beginning
of the chain, so after adding “world" and then “HellO" in the same chain index 4, first goes “HellO"
and then goes “world". Of course, “World" is not found, and “world" is found, because the strings
are case-sensitive, and the codes of ’W’ and ’w’ are different. After deleting “world", only “HellO" is
found in the chain 4. Similarly to “world" and “HellO", after adding “luck" and “GooD" to the same
chain 2, first goes “GooD" and then “luck".

### Sample 2
Input | Output
--- | ---
4 | yes
8 | no
add test | no
add test | yes
find test |
del test |
find test |
find Test |
add Test |
find Test |

Explanation:<br>
Adding “test" twice is the same as adding “test" once, so first find returns “yes". After del, “test" is
6
no longer in the hash table. First time find doesn’t find “Test” because it was not added before, and
strings are case-sensitive in this problem. Second time “Test” can be found, because it has just been
added.

### Sample 3
Input | Output
--- | ---
3 | 
12 | no
check 0 | yes
find help | yes
add help | no
add del |
add add | add help
find add |
find del |
del del |
find del |
check 0 |
check 1 |
check 2 |

Explanation:<br>
Note that you need to output a blank line when you handle an empty chain. Note that the strings
stored in the hash table can coincide with the commands used to work with the hash table.
