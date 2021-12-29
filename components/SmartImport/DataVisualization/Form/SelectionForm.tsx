import { ChangeEvent, useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import errorMessageGenerator from '../../../../utils/errorMessageGenerator';
import { ISiteSmartData } from '../../../../interfaces/ISite';
import { WorkbookContext } from '../../../../context/WorkBookContext';
import {
  coordinatesToLatLong,
  isValidCoordinate
} from '../../../../utils/latLong';
import useCreateSite from '../../../../hooks/useCreateSite';
import Link from 'next/link';

type fieldsName = 'name' | 'description' | 'coordinates' | '_id';

export function SelectionForm() {
  const { mutate, isLoading } = useCreateSite();
  const { selectedCellData } = useContext(WorkbookContext);
  const [selected, setSelected] = useState<fieldsName>();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ISiteSmartData>();

  const submitHandler: SubmitHandler<ISiteSmartData> = formData => {
    const { name, description, coordinates } = formData;
    const { latitude, longitude } = coordinatesToLatLong(coordinates);
    mutate({ name, description, latitude, longitude });
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSelected(e.target.value as fieldsName);

  useEffect(() => {
    if (selectedCellData) {
      if (selected === 'name') setValue('name', selectedCellData);
      if (selected === 'description') setValue('description', selectedCellData);
      if (selected === 'coordinates') setValue('coordinates', selectedCellData);
    }
  }, [selected, selectedCellData, setValue]);

  const errorMessage = errorMessageGenerator(errors);

  return (
    <Box
      sx={{
        borderRight: '1px solid black',
        padding: '1rem 0 .5rem 1.5rem',
        minWidth: 400
      }}
    >
      <Typography variant="body1" sx={{ fontSize: '1.1rem' }} component="h3">
        Site Information
      </Typography>
      <Typography variant="body2" component="p" sx={{ my: 2 }}>
        Select A Field
      </Typography>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <FormControlLabel
                value="name"
                control={
                  <Radio
                    onChange={handleRadioChange}
                    checked={selected === 'name'}
                  />
                }
                label="Site Name"
              />
              <Controller
                name="name"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    {...field}
                    size="small"
                    error={!!errors?.name}
                    helperText={errorMessage?.name}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Name Required'
                  }
                }}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <FormControlLabel
                value="description"
                control={
                  <Radio
                    onChange={handleRadioChange}
                    checked={selected === 'description'}
                  />
                }
                label="Description"
              />
              <Controller
                name="description"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    {...field}
                    size="small"
                    error={!!errors?.description}
                    helperText={errorMessage?.description}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Description Required'
                  }
                }}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <FormControlLabel
                value="coordinates"
                control={
                  <Radio
                    onChange={handleRadioChange}
                    checked={selected === 'coordinates'}
                  />
                }
                label="Coordinate"
              />
              <Controller
                name="coordinates"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    {...field}
                    size="small"
                    error={!!errors?.coordinates}
                    helperText={errorMessage?.coordinates}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Coordinate Required'
                  },
                  validate: {
                    isValidCoordinate
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'right', mr: 8, py: 1 }}>
          <Link href="/">
            <a>
              <Button sx={{ mr: 2 }} variant="outlined">
                Cancel
              </Button>
            </a>
          </Link>

      

          <LoadingButton loading={isLoading} type="submit" variant="contained">
            Save
          </LoadingButton>
        </Box>
      </form>
    </Box>
  );
}
