#include <stdio.h>
#include <string.h>

int main() 
{
    char production[100];
    char *rightPart;
    char *token;
    int count = 1;

    printf("Enter a production: ");
    scanf("%s", production);

    printf("\nTokens:\n");

    printf("Non-terminal: %c\n", production[0]);

    if (production[1] == '-' && production[2] == '>')
        printf("Arrow: ->\n");

    else 
        printf("Error: Production format is wrong. Missing '->'\n");
        return 1;

    rightPart = &production[3];

    token = strtok(rightPart, "|");

    while (token != NULL) 
    {
        printf("Production %d: %s\n", count, token);
        count++;
        token = strtok(NULL, "|");
    }

    return 0;
}
