export const app_open = () => cy.visit("http://localhost:3000/");

// export const check_people_quantity = (elements_quantity, block_number) => {
//     cy.get("@first_column").eq(block_number)
//         .find(".CrewMember-container").and("have.length", 1);
// }

// export const move_from_applied_to_interviwing = (text = 'elements quantity') => {
//     cy.get(".App-column>div").first()
//         .find(".CrewMember-container")
//         .and("have.length", 4);
//     console.log('move element and check how much elements into block', text)
// }

