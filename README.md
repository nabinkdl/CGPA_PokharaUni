
# CGPA to Percentage Calculator

This project allows users to convert their CGPA (Cumulative Grade Point Average) to a percentage using Pokhara University's CGPA to Percentage scale.

[Live Project](https://cgpa-pu.vercel.app/)

## Features
- Converts CGPA (ranging from 2.00 to 4.00) to percentage.
- Displays corresponding grade and honor points.
- Handles errors like invalid CGPA input or CGPA outside the allowed range.
- Designed using modern UI principles for a smooth user experience.

<img width="1080" alt="Screenshot 2025-01-14 at 3 14 02 pm" src="https://github.com/user-attachments/assets/1979a637-e3df-4626-9f5e-16f39634e01b" />


## Tech Stack
- **Frontend:** React, TypeScript
- **State Management:** React hooks (`useState`)
- **UI Library:** Lucide React (for icons)

## File Structure

```
/src
  ├── /models
  │    └── cgpaModel.ts  // Business logic for CGPA to percentage conversion
  ├── /controllers
  │    └── cgpaController.ts // Controller that handles logic between Model and View
  └── App.tsx  // React component (View)
```

- **Model (`cgpaModel.ts`):** Contains the business logic to convert CGPA to percentage and determine the grade.
- **Controller (`cgpaController.ts`):** Manages the interaction between the view and the model (handling CGPA input validation).
- **App.tsx:** The React component that serves as the view to interact with the user.

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/cgpa-calculator.git
cd cgpa-calculator
```

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm start
```

Your app will be running at [http://localhost:3000](http://localhost:3000).

## Usage
1. Enter your CGPA (between 2.00 and 4.00).
2. Click on the "Calculate Percentage" button to see the corresponding percentage, grade, and honor points.
3. Error messages will be shown if you enter an invalid CGPA or a CGPA outside the accepted range.

### Example
For a CGPA of 3.5, the app will show:
- **Percentage:** 85.00%
- **Grade:** A-
- **Honor Points:** 3.7

## License
This project is licensed under the MIT License - see the LICENSE file for details.
