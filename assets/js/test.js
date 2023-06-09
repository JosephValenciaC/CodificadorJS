// Generated by CodiumAI



/*
Code Analysis

Objective:
The objective of the 'codificar' function is to encode a given text input by replacing certain vowels with specific words and displaying the encoded text as output. It also includes error handling for empty or invalid inputs.

Inputs:
- Text input from the user with id "texto"

Flow:
1. Get the input text from the user
2. Check if the input is empty or contains invalid characters
3. If input is invalid, display an error message and reset the form
4. If input is valid, encode the text by replacing certain vowels with specific words
5. Display the encoded text as output in the HTML element with id "resultado"
6. Reset the form and remove any displayed image
7. Display a copy button for the encoded text

Outputs:
- Encoded text output displayed in the HTML element with id "resultado"
- Display of a copy button for the encoded text

Additional aspects:
- Uses regular expressions to check for invalid characters
- Converts all input text to lowercase before encoding
- Replaces vowels 'e', 'i', 'a', 'o', and 'u' with specific words
- Uses the SweetAlert library to display error messages
- Uses other functions such as resetForm(), removeImg(), and btnCopy() to manipulate the HTML elements.
*/



describe('codificar_function', () => {

    // Tests that the function replaces each vowel in the input string with a specific string. 
    it("test_vowel_replacement", () => {
        // Arrange
        const input = "aeiou";
        const expectedOutput = "enterimesaiaoberufat";
        
        // Act
        const result = codificar(input);

        // Assert
        expect(document.getElementById("resultado").innerHTML).toBe(`<p class='resultado1'>${expectedOutput}</p>`);
    });

    // Tests that the function displays an error message when an empty string is entered. 
    it("test_empty_input", () => {
        // Arrange
        const input = "";
        
        // Act
        const result = codificar(input);

        // Assert
        expect(swal).toHaveBeenCalledWith({
            title: "Aun no has escrito nada para codificar :/",
          });
    });

    // Tests that the function displays an error message when a string with special characters, numbers or uppercase letters is entered. 
    it("test_special_chars", () => {
        // Arrange
        const input = "Hello World!";
        
        // Act
        const result = codificar(input);

        // Assert
        expect(swal).toHaveBeenCalledWith({
            title: "No se permiten caracteres especiales, numeros o letras Mayusculas :3",
          });
    });

    // Tests that the function displays the result in a specific format.  
    it("test_display_format", () => {
        // Arrange
        const input = document.createElement("input");
        input.setAttribute("id", "texto");
        input.value = "hola";
        document.body.appendChild(input);

        const expectedOutput = "<p class='resultado1'>holenterai</p>";

        // Act
        codificar();

        // Assert
        expect(document.getElementById("resultado").innerHTML).toBe(expectedOutput);

        // Clean up
        document.body.removeChild(input);
    });

    // Tests that the function resets the form after displaying an error message.  
    it("test_reset_form", () => {
        // Arrange
        const input = document.createElement("input");
        input.setAttribute("id", "texto");
        input.value = "hola#";
        document.body.appendChild(input);

        // Act
        codificar();

        // Assert
        expect(document.getElementById("texto").value).toBe("");
        
        // Clean up
        document.body.removeChild(input);
    });

    // Tests that the function removes an image after displaying the result.  
    it("test_remove_img", () => {
        // Arrange
        const input = document.createElement("input");
        input.setAttribute("id", "texto");
        input.value = "hola";
        document.body.appendChild(input);

        const img = document.createElement("img");
        img.setAttribute("id", "img");
        img.style.display = "block";
        document.body.appendChild(img);

        // Act
        codificar();

        // Assert
        expect(document.getElementById("img").style.display).toBe("none");

        // Clean up
        document.body.removeChild(input);
        document.body.removeChild(img);
    });

    // Tests that the function works correctly with a long input string.   
    it("test_long_input", () => {
        // Arrange
        const input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum, velit velit bibendum bibendum,";
        const expectedOutput = "lenterrem ipsum dolor sit amet, cufatnsenterctetur enterdipiscing elit. Sed enteruimesmod, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum, velentert vel biberenterndum biberenterndum,";

        // Act
        document.getElementById("texto").value = input;
        codificar();
        const output = document.getElementById("resultado").textContent;

        // Assert
        expect(output).toBe(expectedOutput);
    });

    // Tests that the function works correctly with different input values for each vowel.   
    it("test_each_vowel", () => {
        // Arrange
        const inputs = ["e", "i", "a", "o", "u"];
        const expectedOutputs = ["enter", "imes", "ai", "ober", "ufat"];

        // Act and Assert
        inputs.forEach((input, index) => {
            document.getElementById("texto").value = input;
            codificar();
            const output = document.getElementById("resultado").textContent;
            expect(output).toBe(expectedOutputs[index]);
        });
    });

    // Tests that the function works correctly with different input values for each consonant.   
    it("test_each_consonant", () => {
        // Arrange
        const inputs = ["b", "c", "d", "f", "g"];
        const expectedOutputs = ["b", "c", "d", "f", "g"];

        // Act and Assert
        inputs.forEach((input, index) => {
            document.getElementById("texto").value = input;
            codificar();
            const output = document.getElementById("resultado").textContent;
            expect(output).toBe(expectedOutputs[index]);
        });
    });
});
