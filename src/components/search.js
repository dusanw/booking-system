import React, { useState } from 'react';
import '../css/search.css';
import { FormControlLabel, Radio, TextField } from '@mui/material';
import { DesktopDateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function Search() {
  const [tripType, setTripType] = useState('oneway');
  const [depDateTime, setDepDateTime] = useState(new Date());
  const [retDateTime, setRetDateTime] = useState(new Date());

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  return (
    <div className="advanced-search color" id="booking">
      <div className="wrap">
        <form action="search-results.html" method="post">
          <div className="f-row">
            <div className="form-group datepicker one-third">
              <label htmlFor="dep-date">Departure date and time</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDateTimePicker
                  id="dep-date"
                  value={depDateTime}
                  onChange={(newValue) => setDepDateTime(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div class="form-group select one-third">
							<label>Pick up location</label>
							<select>
								<option selected>&nbsp;</option>
								<optgroup label="Austria">
									<option value="Vienna">Vienna</option>
									<option value="Salzburg">Salzburg</option>
									<option value="Innsbruck">Innsbruck</option>
								</optgroup>
								<optgroup label="Czech Republic">
									<option value="Prague">Prague</option>
								</optgroup>
								<optgroup label="Germany">
									<option value="Berlin">Berlin</option>
									<option value="Munich">Munich</option>
									<option value="Frankfurt">Frankfurt</option>
								</optgroup>
								<optgroup label="Hungary">
									<option value="Budapest">Budapest</option>
								</optgroup>
								<optgroup label="Poland">
									<option value="Krakow">Krakow</option>
									<option value="Warsaw">Warsaw</option>
								</optgroup>
							</select>
						</div>
						<div class="form-group select one-third">
							<label>Drop off location</label>
							<select>
								<option selected>&nbsp;</option>
								<optgroup label="Austria">
									<option value="Vienna">Vienna</option>
									<option value="Salzburg">Salzburg</option>
									<option value="Innsbruck">Innsbruck</option>
								</optgroup>
								<optgroup label="Czech Republic">
									<option value="Prague">Prague</option>
								</optgroup>
								<optgroup label="Germany">
									<option value="Berlin">Berlin</option>
									<option value="Munich">Munich</option>
									<option value="Frankfurt">Frankfurt</option>
								</optgroup>
								<optgroup label="Hungary">
									<option value="Budapest">Budapest</option>
								</optgroup>
								<optgroup label="Poland">
									<option value="Krakow">Krakow</option>
									<option value="Warsaw">Warsaw</option>
								</optgroup>
							</select>
						</div>
          </div>

          {tripType === 'return' && (
            <div className="f-row">
              <div className="form-group datepicker one-third">
                <label htmlFor="ret-date">Return date and time</label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDateTimePicker
                    id="ret-date"
                    value={retDateTime}
                    onChange={(newValue) => setRetDateTime(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div class="form-group select one-third">
							<label>Pick up location</label>
							<select>
								<option selected>&nbsp;</option>
								<optgroup label="Austria">
									<option value="Vienna">Vienna</option>
									<option value="Salzburg">Salzburg</option>
									<option value="Innsbruck">Innsbruck</option>
								</optgroup>
								<optgroup label="Czech Republic">
									<option value="Prague">Prague</option>
								</optgroup>
								<optgroup label="Germany">
									<option value="Berlin">Berlin</option>
									<option value="Munich">Munich</option>
									<option value="Frankfurt">Frankfurt</option>
								</optgroup>
								<optgroup label="Hungary">
									<option value="Budapest">Budapest</option>
								</optgroup>
								<optgroup label="Poland">
									<option value="Krakow">Krakow</option>
									<option value="Warsaw">Warsaw</option>
								</optgroup>
							</select>
						</div>
						<div class="form-group select one-third">
							<label>Drop off location</label>
							<select>
								<option selected>&nbsp;</option>
								<optgroup label="Austria">
									<option value="Vienna">Vienna</option>
									<option value="Salzburg">Salzburg</option>
									<option value="Innsbruck">Innsbruck</option>
								</optgroup>
								<optgroup label="Czech Republic">
									<option value="Prague">Prague</option>
								</optgroup>
								<optgroup label="Germany">
									<option value="Berlin">Berlin</option>
									<option value="Munich">Munich</option>
									<option value="Frankfurt">Frankfurt</option>
								</optgroup>
								<optgroup label="Hungary">
									<option value="Budapest">Budapest</option>
								</optgroup>
								<optgroup label="Poland">
									<option value="Krakow">Krakow</option>
									<option value="Warsaw">Warsaw</option>
								</optgroup>
							</select>
						</div>
            </div>
          )}

          <div className="f-row">
            <div class="form-group spinner">
							<label for="people">How many people <small>(including children)</small>?</label>
							<input type="number" id="people" min="1"  />
						</div>
            <div className="form-group radios">
              <div>
                <FormControlLabel
                  control={<Radio />}
                  label="Return"
                  value="return"
                  checked={tripType === 'return'}
                  onChange={handleTripTypeChange}
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Radio />}
                  label="One way"
                  value="oneway"
                  checked={tripType === 'oneway'}
                  onChange={handleTripTypeChange}
                />
              </div>
            </div>
            <div class="form-group right">
							<button type="submit" class="btn large black" id="find-transfer-button">Find a transfer</button>
						</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
