cat pdf-metadata.md > javascript-tutorial.md
cat newpage.md >> javascript-tutorial.md
cat 00a-introduction.md >> javascript-tutorial.md

cat newpage.md >> javascript-tutorial.md
cat 001-quickstart-javascript-ag-grid.md >> javascript-tutorial.md

cat newpage.md >> javascript-tutorial.md
cat 002-enable-enterprise.md >> javascript-tutorial.md

cat newpage.md >> javascript-tutorial.md
cat 003-javascript-cell-renderers.md >> javascript-tutorial.md

cat newpage.md >> javascript-tutorial.md
cat 999-outro.md >> javascript-tutorial.md

pandoc javascript-tutorial.md -o javascript-tutorial-workbook.pdf --from markdown --template eisvogel --listings --toc
open javascript-tutorial-workbook.pdf