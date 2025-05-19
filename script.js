document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.dropdown-item');
  
    if (!serviceItems.length) {
      console.error("No .dropdown-item elements found. Check your HTML.");
      return;
    }
  
    const serviceData = {
      "Remote Sensing Analysis": {
        title: "Remote Sensing Analysis",
        description: "Analyzing satellite and aerial imagery to extract environmental insights and detect changes over time.",
        image: "images/remote_sensing.jpg"
      },
      "GIS Analysis": {
        title: "GIS Analysis",
        description: "Using Geographic Information Systems to analyze spatial data and provide decision-support tools.",
        image: "images/gis_analysis.jpg"
      },
      "Surveying": {
        title: "Surveying",
        description: "Precision field surveying using GNSS receivers, total stations, and drones to build high-accuracy maps and 3D models.",
        image: "images/surveying.jpg"
      },
      "Hydrology Analysis": {
        title: "Hydrology Analysis",
        description: "Modeling watershed behavior, streamflow, and flood risk using hydrological simulation tools and spatial data.",
        image: "Hydrology.jpg"
      },
      "Web Mapping": {
        title: "Web Mapping",
        description: "Building interactive web maps with Leaflet, Mapbox GL, and ArcGIS API to visualize and share spatial data online.",
        image: "images/web_mapping.jpg"
      },
      "Environmental Modeling": {
        title: "Environmental Modeling",
        description: "Developing computational models of ecological and environmental processes to support sustainable management.",
        image: "images/environmental_modeling.jpg" // or "bimal.jpg" if that's the correct path
      }
    };
  
    serviceItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const name = item.getAttribute('data-service');
        if (!name || !serviceData[name]) {
          console.warn(`No data found for: ${name}`);
          return;
        }
  
        localStorage.setItem('serviceDetails', JSON.stringify(serviceData[name]));
        console.log(`Stored service data for "${name}" and redirecting...`);
        window.location.href = 'service-details.html';
      });
    });
  });
  