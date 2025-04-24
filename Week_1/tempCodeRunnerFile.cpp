#include <stdio.h>
#include <string.h>

int isAccepted(char str[]) 
{
    int state = 0;
    int i;

    for (i = 0; str[i] != '\0'; i++) 
    {
        char ch = str[i];

        switch (state) 
        {
            case 0:
                if (ch == 'a')
                    state = 1;
                else
                    return 0; 
                break;

            case 1:
                if (ch == 'a' || ch == 'b')
                    state = 1; 
                else
                    return 0;
                break;
        }
    }

    if (state == 1 && str[strlen(str)-1] == 'b')
        return 1;
    else
        return 0;
}

int main() {
    char input[100];

    printf("Enter a string: ");
    scanf("%s", input);

    if (isAccepted(input))
        printf("Accepted: The string matches a(a|b)*b\n");
    else
        printf("Rejected: The string does NOT match a(a|b)*b\n");

    return 0;
}