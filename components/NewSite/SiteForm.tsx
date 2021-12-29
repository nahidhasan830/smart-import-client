import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { ISite } from '../../interfaces/ISite';
import Divider from '@mui/material/Divider';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import useCreateSite from '../../hooks/useCreateSite';
import errorMessageGenerator from '../../utils/errorMessageGenerator';
import Image from 'next/image';
import mapPicture from '../../public/images/map.png';
import { isLatitude, isLongitude } from '../../utils/latLong';

const SiteForm = () => {
  const { isLoading, mutate } = useCreateSite();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ISite>();

  const submitHandler: SubmitHandler<ISite> = formData => mutate(formData);

  const errorMessage = errorMessageGenerator(errors);

  return (
    <>
      <Box sx={{ padding: 4 }}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Box>
            <LoadingButton
              type="submit"
              startIcon={<SaveIcon />}
              variant="outlined"
              loading={isLoading}
            >
              Save
            </LoadingButton>
          </Box>
          <Divider sx={{ width: '100%', my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', mr: 2 }}>
              <Controller
                name="name"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    {...field}
                    label="Name"
                    error={!!errors?.name}
                    helperText={errorMessage?.name}
                    margin="normal"
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Name Required'
                  }
                }}
              />
              <Controller
                name="description"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    required
                    {...field}
                    label="Description"
                    error={!!errors?.description}
                    helperText={errorMessage?.description}
                    margin="normal"
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Description Required'
                  }
                }}
              />
              <Box sx={{ display: 'flex ', justifyContent: 'space-between' }}>
                <Controller
                  name="latitude"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <TextField
                      required
                      {...field}
                      label="Latitude"
                      error={!!errors?.latitude}
                      helperText={errorMessage?.latitude}
                      margin="normal"
                      sx={{ mr: 1 }}
                    />
                  )}
                  rules={{
                    required: {
                      value: true,
                      message: 'Latitude Required'
                    },
                    validate: {
                      isLatitude: (v: string) => isLatitude(+v)
                    }
                  }}
                />
                <Controller
                  name="longitude"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <TextField
                      required
                      {...field}
                      label="Longitude"
                      error={!!errors?.longitude}
                      helperText={errorMessage?.longitude}
                      margin="normal"
                      sx={{ ml: 1 }}
                    />
                  )}
                  rules={{
                    required: {
                      value: true,
                      message: 'Longitude Required'
                    },
                    validate: {
                      isLongitude: (v: string) => isLongitude(+v)
                    }
                  }}
                />
              </Box>
            </Box>
            <Image src={mapPicture} height={250} width={250} alt="map image" />
          </Box>
        </form>
      </Box>
    </>
  );
};

export default SiteForm;
