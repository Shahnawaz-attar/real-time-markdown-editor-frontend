// src/formTemplate.js

const formTemplate = `
<form id="my-markdown-form" style="max-width: 400px;">
  <h2>User Information</h2>

  <!-- 1. Text Field -->
  <label for="name">Name:</label><br />
  <input type="text" id="name" name="name" placeholder="Enter your name" /><br /><br />

  <!-- 2. Email Field -->
  <label for="email">Email:</label><br />
  <input type="email" id="email" name="email" placeholder="example@domain.com" /><br /><br />

  <!-- 3. Number Field -->
  <label for="age">Age:</label><br />
  <input type="number" id="age" name="age" placeholder="e.g., 25" /><br /><br />

  <!-- 4. Date Field -->
  <label for="birthdate">Birth Date:</label><br />
  <input type="date" id="birthdate" name="birthdate" /><br /><br />

  <!-- 5. Radio Buttons (Gender) -->
  <fieldset>
    <legend>Gender:</legend>
    <input type="radio" id="gender-male" name="gender" value="male" />
    <label for="gender-male">Male</label>
    <input type="radio" id="gender-female" name="gender" value="female" />
    <label for="gender-female">Female</label>
    <input type="radio" id="gender-other" name="gender" value="other" />
    <label for="gender-other">Other</label>
  </fieldset>
  <br />

  <!-- 6. Checkboxes (Hobbies) -->
  <fieldset>
    <legend>Hobbies:</legend>
    <input type="checkbox" id="hobby-coding" name="hobbies" value="coding" />
    <label for="hobby-coding">Coding</label>
    <input type="checkbox" id="hobby-sports" name="hobbies" value="sports" />
    <label for="hobby-sports">Sports</label>
    <input type="checkbox" id="hobby-music" name="hobbies" value="music" />
    <label for="hobby-music">Music</label>
  </fieldset>
  <br />

  <!-- 7. Select (Country) -->
  <label for="country">Country:</label><br />
  <select id="country" name="country">
    <option value="">--Select Country--</option>
    <option value="IN">India</option>
    <option value="US">United States</option>
    <option value="UK">United Kingdom</option>
  </select>
  <br /><br />

  <!-- 8. Textarea (Bio) -->
  <label for="bio">Short Bio:</label><br />
  <textarea id="bio" name="bio" rows="4" placeholder="Tell us about yourself..."></textarea>
  <br /><br />

  <!-- Submit Button -->
  <button type="submit">Submit</button>
</form>
`;

export default formTemplate;
