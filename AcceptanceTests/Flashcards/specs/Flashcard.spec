# Flashcard Acceptance Test


* Open Flashcard application on "3000"

## Add New Flashcard
* Enter a question "What is inside me?"
* Enter a answer "A Hero"
* Add flascard by given inputs
* Must display "What is inside me?"

## Must Show Flashcards Content
* Enter a question "What is inside me?"
* Enter a answer "A Hero"
* Add flashcard by given inputs
* Pick the flashcard
* Must display "A Hero"

## Delete All Flashcards
* Enter a question "What is inside me?"
* Enter a answer "A Hero"
* Add flashcard

* Enter a question "What is not inside me?"
* Enter a answer "A Moby"
* Add flashcard

* Delete all flashcards
* Should not display "What is inside me?"

## Delete a Flashcard
* Enter a question "What is inside me?"
* Enter a answer "A Hero"
* Add flashcard by given inputs
* Delete flashcard 
* Should not display "What is inside me?"