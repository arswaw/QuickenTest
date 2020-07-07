# QLTest

This project was created by arswaw (Alex Otten).

The goal is to use Angular Forms to add to a table which displays contacts.

The website is mobile-friendly, and adds a scroll to the table so that it doesn't overflow off the screen.

It includes passing unit tests.

I used a class to track the state of the form. I had to clone the formdata class in order to send it to the parent.
If not, the class would eventually reflect the cleared form state.

The table works by reading incoming JSON and dynamically building the columns and rows. This is useful
for a simple read-only table.

Thanks for reading.
