import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import TuneIcon from '@mui/icons-material/Tune';
import ComboBox from './ComboBox';
import { Box } from '@mui/material';

interface FilterProps {
  asc: boolean;
  showComboBox: boolean;
  selectedBreeds: string[];
  setSelectedBreeds: React.Dispatch<React.SetStateAction<string[]>>;
  ageRange: number | number[];
  ageMin: number;
  ageMax: number;
  handleSort: () => void;
  toggleShowFilter: () => void;
  handleAgeRangeSlider: (event: any, newValue: number | number[]) => void;
}

const FilterSection: React.FC<FilterProps> = ({
  asc,
  showComboBox,
  selectedBreeds,
  setSelectedBreeds,
  ageRange,
  handleSort,
  toggleShowFilter,
  handleAgeRangeSlider,
  ageMin,
  ageMax,
}) => {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ maxWidth: '15rem' }}>
        <Box
          sx={{
            py: '1em',
            px: '1em',
            my: 10,
            bgcolor: '#FFFFFF',
            alignItems: 'left',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Grid container spacing={0} columns={16}>
            <Grid item xs={8}>
              <Button
                variant={showComboBox ? 'contained' : 'outlined'}
                color='primary'
                startIcon={<TuneIcon />}
                fullWidth
                // onClick={toggleShowFilter}
                sx={{
                  border: 0.2,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderRight: 0.1,
                }}
              >
                FILTER
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button
                variant='outlined'
                color='primary'
                startIcon={asc ? <ArrowUpward /> : <ArrowDownward />}
                fullWidth
                onClick={handleSort}
                sx={{
                  border: 0.2,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                SORT
              </Button>
            </Grid>
          </Grid>
          <Box display='flex' flexDirection='column' sx={{ py: 2 }}>
            <Typography
              id='filter-title'
              color='primary'
              variant='h6'
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Filter by
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography id='track-breeds' variant='subtitle1' gutterBottom>
                Select Dog Breed(s)
              </Typography>
              <Box sx={{ pl: 1, pr: 0 }}>
                <ComboBox
                  selectedBreeds={selectedBreeds}
                  setSelectedBreeds={setSelectedBreeds}
                />
              </Box>
            </Box>
            Select Age Range:
            <Box>
              <Typography id='track-slider' gutterBottom>
                {ageMin} - {ageMax} years old
              </Typography>
              <Slider
                getAriaLabel={() => 'Dog Age Range'}
                value={ageRange}
                onChange={handleAgeRangeSlider}
                max={20}
                sx={{ maxWidth: 150 }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default FilterSection;
