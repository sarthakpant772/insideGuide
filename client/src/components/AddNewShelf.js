import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddNewShelf = () => {
  const [serviceList, setServiceList] = useState([{ service: '' }])
  const [shelfName, setShelfName] = useState('')
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target
    const list = [...serviceList]
    list[index][name] = value
    setServiceList(list)
  }

  const handleServiceRemove = (index) => {
    const list = [...serviceList]
    list.splice(index, 1)
    setServiceList(list)
  }

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: '' }])
  }

  const handleSubmit = () => {
    console.log(shelfName)
    console.log(serviceList)
  }

  return (
    <Box>
      <Typography variant="h5">Add Shelf</Typography>
      <Box>
        <Typography>Add Shelf Name:</Typography>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Author"
          variant="outlined"
          onChange={(e) => setShelfName(e.target.value)}
        >
          {shelfName}
        </TextField>
      </Box>

      <form className="App" autoComplete="off">
        <Box className="form-field">
          <Typography variant="h6" htmlFor="service">
            Add Step(s)
          </Typography>
          {serviceList.map((singleService, index) => (
            <div key={index} className="services">
              <div className="first-division">
                <TextField
                  fullWidth
                  name="service"
                  type="text"
                  id="service"
                  value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  required
                />
                {serviceList.length - 1 === index && serviceList.length < 4 && (
                  <Button
                    type="button"
                    onClick={handleServiceAdd}
                    className="add-btn"
                    size="large"
                    variant="outlined"
                  >
                    <span>Add a Step</span>
                  </Button>
                )}
              </div>
              <div className="second-division">
                {serviceList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleServiceRemove(index)}
                    className="remove-btn"
                  >
                    <span>Remove</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </Box>
      </form>
      <Box
        sx={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}
      >
        <Button size="large" variant="outlined" onClick={handleSubmit}>
          Add Shelf
        </Button>
      </Box>
    </Box>
  )
}

export default AddNewShelf
