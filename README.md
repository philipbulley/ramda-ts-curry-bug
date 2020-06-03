# ramda-ts-curry-bug

Reproduction of bug regarding assignment of a curried function to a variable with an `F.Curry` type.

Please see `index.ts` for code.

To see the bug:

```
$ yarn
$ yarn tsc
```

Expected output illustrating bug:
```
$ tsc --noEmit
src/index.ts:11:11 - error TS2321: Excessive stack depth comparing types 'GapsOf<?, L2>' and 'GapsOf<?, L2>'.

11 person1 = person3(99, 'Bob');
             ~~~~~~~~~~~~~~~~~~

src/index.ts:11:11 - error TS2321: Excessive stack depth comparing types 'GapsOf<L1, ?>' and 'GapsOf<L1, ?>'.

11 person1 = person3(99, 'Bob');
             ~~~~~~~~~~~~~~~~~~

src/index.ts:11:11 - error TS2589: Type instantiation is excessively deep and possibly infinite.

11 person1 = person3(99, 'Bob');
             ~~~~~~~~~~~~~~~~~~
```



To run in browser (not necessary, but to verify that code runs):

```
$ yarn start
```