




[![chess](https://github.com/dudipsh/chess/blob/master/public/screenshot/screenshot1.png "Game")](https://dudipsh.github.io/chess/)


### Run demo
```textmate
yarn install
yarn start
```


## Algebraic notation (chess)

### == Naming the squares ==
Each square of the [[chessboard]] is identified by a unique coordinate pair—a letter and a number—from White's point of view. The vertical columns of squares, called ''{{chessgloss|file|files}}'', are labeled ''a'' through ''h'' from White's left (the {{chessgloss|queenside}}) to right (the {{chessgloss|kingside}}). The horizontal rows of squares, called ''{{chessgloss|rank|ranks}}'', are numbered ''1'' to ''8'' starting from White's side of the board. Thus each square has a unique identification of file letter followed by rank number. For example, the initial square of White's king is designated as "e1".

Each [[chess piece|piece type]] (other than pawns) is identified by an uppercase letter. English-speaking players use the letters ''K'' for [[king (chess)|king]], ''Q'' for [[queen (chess)|queen]], ''R'' for [[rook (chess)|rook]], ''B'' for [[bishop (chess)|bishop]], and ''N'' for [[knight (chess)|knight]] (since K is already used and is a silent letter in ''knight''). ''S'' (from the German ''Springer'') was also used for the knight in the early days of algebraic notation and is still used in some [[chess problem]]s (where ''N'' stands for [[nightrider (chess)|nightrider]], a popular [[fairy chess piece]]).

Different initial letters are used by other languages. In chess literature, especially that intended for an international audience, the language-specific letters are often replaced by universally recognized [[Chess symbols in Unicode|piece symbol]]s; for example, '''♞c6''' in place of '''Nc6'''. This style is known as '''Figurine Algebraic Notation''' ('''FAN'''). The [[Unicode]] [[Miscellaneous Symbols]] set includes all the symbols necessary for FAN.<ref>{{cite web |url=http://www.alanwood.net/unicode/miscellaneous_symbols.html |title=Test for Unicode support in Web browsers}}</ref>

In both standard algebraic notation and FAN, pawns are not identified by a letter or symbol, but rather by the absence of one.

## == Notation for moves ==
Each move of a piece is indicated by the piece's uppercase letter, plus the coordinate of the destination square. For example, '''Be5''' (bishop moves to e5), '''Nf3''' (knight moves to f3). For pawn moves, a letter indicating pawn is not used, only the destination square is given. For example, '''c5''' (pawn moves to c5).

## Captures <span id="e.p."></span>===
When a piece makes a {{chessgloss|capture}}, an "x" (or the multiplication sign "×") is inserted immediately before the destination square. For example, '''Bxe5''' (bishop captures the piece on e5). When a pawn makes a capture, the ''file'' from which the pawn departed is used to identify the pawn. For example, '''exd5''' (pawn on the e-file captures the piece on d5). In older German, Russian, or Italian publications, a [[colon (punctuation)|colon]] (:) is sometimes used instead of "x", either in the same place the "x" would go ('''B:e5''') or at the end ('''Be5:''').


Some texts, such as the ''[[Encyclopaedia of Chess Openings]]'', omit any indication that a capture has been made. (For example, '''Be5''' instead of Bxe5; '''ed6''' instead of exd6 or exd6&nbsp;e.p.) When it is unambiguous to do so, a pawn capture is sometimes described by specifying only the files involved ('''exd''' or even '''ed'''). These shortened forms are sometimes called ''minimal'' or ''abbreviated'' algebraic notation.

 

When two (or more) identical pieces can move to the same square, the moving piece is uniquely identified by specifying the piece's letter, followed by (in descending order of preference):

* the file of departure (if they differ); or
* the rank of departure (if the files are the same but the ranks differ); or
* both the file and rank of departure (if neither alone is sufficient to identify the piece – which occurs only in rare cases where a player has three or more identical pieces able to reach the same square, as a result of one or more pawns having [[promotion (chess)|promoted]]).

In the diagram, both black rooks could legally move to f8, so the move of the d8-rook to f8 is disambiguated as '''Rdf8'''. For the white rooks on the a-file which could both move to a3, it is necessary to provide the ''rank'' of the moving piece, i.e., '''R1a3'''.

In the case of the white queen on h4 moving to e1, neither the rank nor file alone are sufficient to disambiguate from the other white queens. As such, this move is written '''Qh4e1'''.

As above, an "x" can be inserted to indicate a capture; for example, if the final case were a capture, it would be written as '''Qh4xe1'''.


