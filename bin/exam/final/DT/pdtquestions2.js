const descriptiveQuestions2 = [
{
    question_id: "UNIQUE_ID_HERE", // E.g., "dt_aprmtp25_II_5b"
    source: "Your Source Name",    // E.g., "Mock Test Paper - Series II: April 2025"
    chapter_name: [
    "Chapter Name 1",
    "Chapter Name 2"
    ],                             // Can be a single string or an array of strings
    placement: 5,                  // CRITICAL: Ensure this is a number (1 through 6) to avoid the "undefined" glitch!
    marks: 14,
    question_html: `
    <p>Enter your question text and HTML here.</p>
    <ul>
        <li>You can use standard HTML tags like lists, tables, and bold text.</li>
    </ul>
    `,
    solution_html: `
    <p><strong>Computation of Total Income</strong></p>
    <table border="1" cellspacing="0" cellpadding="5">
        <tr>
        <th>Particulars</th>
        <th>Amount (₹)</th>
        </tr>
        <tr>
        <td>Example item</td>
        <td>1,00,000</td>
        </tr>
    </table>
    `
    }

  // Add your next question object here, separated by a comma
  // {
  //   question_id: "...",
  //   ...
  // }
];
