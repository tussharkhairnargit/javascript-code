Here is a comprehensive, structured list of 100 recursive programming problems in JavaScript. They are grouped logically by data structure and concept, scaling from absolute beginner to advanced interview-level algorithmic problems.
------------------------------
## 📦 Group 1: Core Math & Number Mechanics (1–15)

* 1. Factorial: Calculate n! for a given integer n.
* 2. Fibonacci Number: Find the n-th number in the Fibonacci sequence.
* 3. Sum of Range: Add all positive integers from 1 up to n.
* 4. Power Function: Implement pow(base, exponent) without using Math.pow() or **.
* 5. Countdown: Print numbers from n down to 1.
* 6. Count Up: Print numbers from 1 up to n.
* 7. Sum of Digits: Find the sum of all individual digits in a number (e.g., 123 → 6).
* 8. Count Digits: Return the total count of digits in a given number.
* 9. Greatest Common Divisor (GCD): Implement the Euclidean algorithm recursively.
* 10. Least Common Multiple (LCM): Find the LCM of two numbers using your recursive GCD.
* 11. Decimal to Binary: Convert a base-10 number into a binary string.
* 12. Binary to Decimal: Convert a binary string back into a base-10 integer.
* 13. Is Even: Determine if a number is even using mutual recursion (subtracting 1).
* 14. Product of Two Numbers: Multiply two numbers using only addition/subtraction.
* 15. Collatz Conjecture Steps: Count how many steps it takes to reach 1 using the Collatz rules.

## 🔤 Group 2: String Processing & Manipulation (16–35)

* 16. Reverse String: Reverse a string character-by-character.
* 17. Reverse Words: Reverse the order of words in a sentence while keeping characters intact.
* 18. Palindrome Check: Verify if a string reads the same forwards and backwards.
* 19. Count Vowels: Count all vowels (a, e, i, o, u) in a string.
* 20. Count Consonants: Count all non-vowel alphabetical characters.
* 21. Capitalize Words: Capitalize the first letter of every word in a sentence.
* 22. Remove Spaces: Remove all whitespace characters from a string.
* 23. Clean Consecutive Spaces: Reduce multiple consecutive spaces down to a single space.
* 24. Remove Duplicate Characters: Remove adjacent duplicate characters (e.g., "aaabbc" → "abc").
* 25. Acronym Generator: Extract the first letter of each word to create an acronym.
* 26. Character Frequency Count: Build an object tracking the count of each character.
* 27. Substring Search: Check if a target substring exists inside a parent string.
* 28. Count Occurrences: Count how many times a specific character appears.
* 29. Caesar Cipher: Shift alphabetical characters by a given key value.
* 30. String Length: Calculate the length of a string without using .length.
* 31. Insert Character: Insert a specific character between every existing character.
* 32. Strip Punctuation: Remove all non-alphanumeric characters.
* 33. Is Isogram: Check if a string has no repeating letters.
* 34. Check Anagram: Determine if two strings are anagrams of each other.
* 35. Interleave Strings: Merge two strings by alternating characters.

## 📊 Group 3: Basic Array Operations (36–50)

* 36. Array Sum: Calculate the total sum of elements in a flat array.
* 37. Array Product: Calculate the product of all numbers in an array.
* 38. Find Maximum: Find the largest number in an array.
* 39. Find Minimum: Find the smallest number in an array.
* 40. Reverse Array: Invert the order of elements in an array.
* 41. Element Search: Check if an element exists in an array (Linear Search).
* 42. Count Occurrences in Array: Count how many times an element appears in an array.
* 43. Filter Even Numbers: Return a new array containing only the even numbers.
* 44. Map Operations: Implement a custom .map() function recursively.
* 45. Reduce Operations: Implement a custom .reduce() function recursively.
* 46. Is Array Sorted: Check if an array is strictly sorted in ascending order.
* 47. Remove Duplicates: Filter out all duplicate elements from an array.
* 48. Zip Arrays: Combine two arrays into a single array of pairs.
* 49. Chunk Array: Split an array into smaller sub-arrays of a specified length.
* 50. Alternate Elements: Extract every second element from an array.

## 🗂️ Group 4: Nested Objects, Deep Arrays, & JSON (51–65)

* 51. Flatten Deep Array: Flatten an array with unlimited levels of nesting.
* 52. Deep Object Search: Check if a specific value exists anywhere inside a deeply nested object.
* 53. Deep Clone: Write a function to completely clone an object, breaking all references.
* 54. Sum Nested Numbers: Sum all numbers found inside a deeply nested JSON object.
* 55. Count Keys: Count the total number of keys across all levels of a nested object.
* 56. Deep Freeze: Recursively run Object.freeze() on an object and all its sub-objects.
* 57. Flatten Object Paths: Convert a nested object into a flat object with dot-notated keys (e.g., {a: {b: 1}} → {"a.b": 1}).
* 58. Find Key Path: Return the breadcrumb path (array of keys) to a target value.
* 59. Remove Null/Undefined: Recursively scrub all null or undefined values from an object.
* 60. Deep Equality Check: Compare two nested objects to see if they are structurally identical.
* 61. Convert Object to Query String: Turn a nested configuration object into a URL query string.
* 62. Diff Two Objects: Find all differences between two nested objects and return a structural delta.
* 63. Collect Values by Key: Gather all values tied to a specific key name across a nested JSON structure.
* 64. Rename Object Keys: Recursively change all instances of a specific key name to a new name.
* 65. Filter Nested Object: Remove keys from a nested structure that fail a callback truth test.

## 🌲 Group 5: Trees & DOM Traversal (66–80)

* 66. Binary Tree Pre-order Traversal: Visit Root → Left → Right.
* 67. Binary Tree In-order Traversal: Visit Left → Root → Right.
* 68. Binary Tree Post-order Traversal: Visit Left → Right → Root.
* 69. Max Depth of Binary Tree: Find the longest path from the root node down to a leaf node.
* 70. Min Depth of Binary Tree: Find the shortest path from the root node down to a leaf node.
* 71. Invert Binary Tree: Flip a binary tree so that all left and right children are swapped.
* 72. Path Sum: Check if a tree has a root-to-leaf path that sums up to a target value.
* 73. Is Same Tree: Check if two binary trees are structurally identical.
* 74. Count Leaves: Count the total number of leaf nodes (nodes with no children).
* 75. DOM Get Element By ID: Recreate document.getElementById using recursive DOM traversal.
* 76. DOM Get Elements By Class: Recreate document.getElementsByClassName recursively.
* 77. DOM Text Collector: Extract and concatenate all text nodes inside a DOM tree element.
* 78. Lowest Common Ancestor (LCA): Find the lowest shared ancestor node for two given nodes in a tree.
* 79. Is Symmetric Tree: Check if a tree is a mirror image of itself.
* 80. Serialize/Deserialize Tree: Convert a tree structure into a string and parse it back into a tree object.

## 🏁 Group 6: Advanced Algorithms & Backtracking (81–100)

* 81. Binary Search: Implement a fast divide-and-conquer search on a sorted array.
* 82. Merge Sort: Implement the merge sort algorithm recursively.
* 83. Quick Sort: Implement the quick sort algorithm recursively.
* 84. String Permutations: Generate all possible structural arrangements of a string's characters.
* 85. Array Subsets (Power Set): Generate all possible sub-combinations of an array.
* 86. Tower of Hanoi: Solve the classic puzzle moving discs between three pegs.
* 87. Combination Sum: Find all unique combinations of numbers that add up to a target constant.
* 88. Word Search Grid: Search a 2D matrix of letters for a hidden word (Boggle style).
* 89. Flood Fill: Recreate the paint-bucket fill tool for a 2D grid of pixel colors.
* 90. Maze Solver: Find a valid path out of a 2D array maze from start to finish.
* 91. N-Queens Problem: Place N non-attacking chess queens on an N × N chessboard.
* 92. Sudoku Solver: Write a backtracking function to completely solve an unsolved Sudoku board.
* 93. Generate Parentheses: Generate all combinations of n pairs of well-formed parentheses.
* 94. Letter Combinations of a Phone Number: Return all letter combinations that a digit string could represent on a phone keypad.
* 95. Partition Labels: Partition a string into as many parts as possible so that each letter appears in at most one part.
* 96. Edit Distance (Levenshtein): Find the minimum operations needed to convert one string to another.
* 97. Coin Change Problem: Find the minimum number of coins needed to make a specific change amount.
* 98. Climbing Stairs: Count how many distinct ways you can climb n stairs taking 1 or 2 steps at a time.
* 99. Longest Common Subsequence (LCS): Find the length of the longest subsequence present in two strings.
* 100. Unique Paths Grid: Calculate the total possible paths from the top-left to the bottom-right of an M × N matrix.

------------------------------

* Would you like an interactive quiz component to test your knowledge on base cases vs recursive steps, or should we dive straight into code solutions for a specific number?


