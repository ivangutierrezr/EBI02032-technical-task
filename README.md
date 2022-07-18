![CircleCI](https://circleci.com/gh/ivangutierrezr/ebi02032-technical-task.svg?style=svg)

# EBI02032-technical-task
Web Developer (EBI02032) – Technical task

This website has been made as the technical task requirement for the Web Developer Role (EBI02032) at EMBL's European Bioinformatics Institute.

The first approach was focused on getting the data from the provided Github repo while preserving its full structure as an array of objects (fullDataSet). The next step was focused on ordering the data into a new array of objects (orderedDataSet); where every object belongs to a unique gene that has all model_id grouped by diagnoses into an array of diagnoses and this has an array of models. The idea in this last step was to sort the data to make the heatmap building easier. Also, orderedDataSet allows you to create the heatmap header component data, to get the max and min value for heatmap labels and apply the filters easier.

Finally, for the filters and the range selector, the approach was: if either, the genes or diagnosis filter has data selected, the range selector will be disabled. This is because it makes no sense to show the highests z-score averages with just a few elements displayed, hence, when a gene or diagnosis is selected in their filters, the range selector will be automatically disabled and set to the 100 percentile.

To run this app you must:

1. Clone this repo: 

git clone https://github.com/ivangutierrezr/ebi02032-technical-task.git

2. Go into ebi02032-technical-task folder and run this commands:

```
npm install
```

For run as production server:

```
npm run build
npm start
```

For run as developer:

```
npm run dev
```

The selected tool for executing the CI is Circle CI

Visit: https://ebi02032-technical-task.herokuapp.com for live demo of this app.
