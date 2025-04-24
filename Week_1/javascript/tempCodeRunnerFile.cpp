#include <stdio.h>
#include <string.h>

char keywords[][20] = {
    "auto", "break", "case", "char", "const", "continue", "default",
    "do", "double", "else", "enum", "extern", "float", "for",
    "goto", "if", "int", "long", "register", "return", "short",
    "signed", "sizeof", "static", "struct", "switch", "typedef",
    "union", "unsigned", "void", "volatile", "while"};

int isKeyword(char word[]) {
    int i;
    for (i = 0; i < 32; i++) {
        if (strcmp(keywords[i], word) == 0)
            return 1;
    }
    return 0;
}

int main() {
    char word[20];

    printf("Enter a word: ");
    scanf("%s", word);

    if (isKeyword(word))
        printf("'%s' is a keyword.\n", word);
    else
        printf("'%s' is NOT a keyword.\n", word);

    return 0;
}