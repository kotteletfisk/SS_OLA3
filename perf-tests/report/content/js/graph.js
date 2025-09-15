/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 69762.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 3.0], [0.3, 3.0], [0.4, 3.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 3.0], [0.9, 3.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 4.0], [2.6, 4.0], [2.7, 4.0], [2.8, 4.0], [2.9, 4.0], [3.0, 4.0], [3.1, 4.0], [3.2, 4.0], [3.3, 4.0], [3.4, 4.0], [3.5, 4.0], [3.6, 4.0], [3.7, 4.0], [3.8, 4.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 5.0], [5.2, 5.0], [5.3, 5.0], [5.4, 5.0], [5.5, 5.0], [5.6, 5.0], [5.7, 5.0], [5.8, 5.0], [5.9, 5.0], [6.0, 5.0], [6.1, 5.0], [6.2, 5.0], [6.3, 5.0], [6.4, 5.0], [6.5, 5.0], [6.6, 5.0], [6.7, 5.0], [6.8, 5.0], [6.9, 5.0], [7.0, 5.0], [7.1, 5.0], [7.2, 5.0], [7.3, 5.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 6.0], [9.0, 6.0], [9.1, 6.0], [9.2, 6.0], [9.3, 7.0], [9.4, 7.0], [9.5, 7.0], [9.6, 7.0], [9.7, 7.0], [9.8, 7.0], [9.9, 7.0], [10.0, 7.0], [10.1, 7.0], [10.2, 7.0], [10.3, 7.0], [10.4, 7.0], [10.5, 7.0], [10.6, 7.0], [10.7, 7.0], [10.8, 7.0], [10.9, 7.0], [11.0, 7.0], [11.1, 7.0], [11.2, 7.0], [11.3, 7.0], [11.4, 7.0], [11.5, 7.0], [11.6, 7.0], [11.7, 7.0], [11.8, 7.0], [11.9, 7.0], [12.0, 8.0], [12.1, 8.0], [12.2, 8.0], [12.3, 8.0], [12.4, 8.0], [12.5, 8.0], [12.6, 8.0], [12.7, 8.0], [12.8, 8.0], [12.9, 8.0], [13.0, 8.0], [13.1, 8.0], [13.2, 8.0], [13.3, 8.0], [13.4, 8.0], [13.5, 8.0], [13.6, 8.0], [13.7, 8.0], [13.8, 8.0], [13.9, 8.0], [14.0, 8.0], [14.1, 8.0], [14.2, 8.0], [14.3, 8.0], [14.4, 8.0], [14.5, 8.0], [14.6, 8.0], [14.7, 8.0], [14.8, 8.0], [14.9, 8.0], [15.0, 9.0], [15.1, 9.0], [15.2, 9.0], [15.3, 9.0], [15.4, 9.0], [15.5, 9.0], [15.6, 9.0], [15.7, 9.0], [15.8, 9.0], [15.9, 9.0], [16.0, 9.0], [16.1, 9.0], [16.2, 9.0], [16.3, 9.0], [16.4, 9.0], [16.5, 9.0], [16.6, 9.0], [16.7, 9.0], [16.8, 9.0], [16.9, 9.0], [17.0, 9.0], [17.1, 9.0], [17.2, 9.0], [17.3, 9.0], [17.4, 9.0], [17.5, 9.0], [17.6, 9.0], [17.7, 9.0], [17.8, 9.0], [17.9, 9.0], [18.0, 9.0], [18.1, 10.0], [18.2, 10.0], [18.3, 10.0], [18.4, 10.0], [18.5, 10.0], [18.6, 10.0], [18.7, 10.0], [18.8, 10.0], [18.9, 10.0], [19.0, 10.0], [19.1, 10.0], [19.2, 10.0], [19.3, 10.0], [19.4, 10.0], [19.5, 10.0], [19.6, 10.0], [19.7, 10.0], [19.8, 10.0], [19.9, 10.0], [20.0, 10.0], [20.1, 10.0], [20.2, 10.0], [20.3, 10.0], [20.4, 10.0], [20.5, 10.0], [20.6, 10.0], [20.7, 10.0], [20.8, 10.0], [20.9, 10.0], [21.0, 10.0], [21.1, 10.0], [21.2, 10.0], [21.3, 11.0], [21.4, 11.0], [21.5, 11.0], [21.6, 11.0], [21.7, 11.0], [21.8, 11.0], [21.9, 11.0], [22.0, 11.0], [22.1, 11.0], [22.2, 11.0], [22.3, 11.0], [22.4, 11.0], [22.5, 11.0], [22.6, 11.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 11.0], [24.7, 11.0], [24.8, 11.0], [24.9, 11.0], [25.0, 12.0], [25.1, 12.0], [25.2, 12.0], [25.3, 12.0], [25.4, 12.0], [25.5, 12.0], [25.6, 12.0], [25.7, 12.0], [25.8, 12.0], [25.9, 12.0], [26.0, 12.0], [26.1, 12.0], [26.2, 12.0], [26.3, 12.0], [26.4, 12.0], [26.5, 12.0], [26.6, 12.0], [26.7, 12.0], [26.8, 12.0], [26.9, 12.0], [27.0, 12.0], [27.1, 12.0], [27.2, 12.0], [27.3, 12.0], [27.4, 12.0], [27.5, 12.0], [27.6, 12.0], [27.7, 12.0], [27.8, 12.0], [27.9, 12.0], [28.0, 12.0], [28.1, 12.0], [28.2, 12.0], [28.3, 12.0], [28.4, 12.0], [28.5, 13.0], [28.6, 13.0], [28.7, 13.0], [28.8, 13.0], [28.9, 13.0], [29.0, 13.0], [29.1, 13.0], [29.2, 13.0], [29.3, 13.0], [29.4, 13.0], [29.5, 13.0], [29.6, 13.0], [29.7, 13.0], [29.8, 13.0], [29.9, 13.0], [30.0, 13.0], [30.1, 13.0], [30.2, 13.0], [30.3, 13.0], [30.4, 13.0], [30.5, 13.0], [30.6, 13.0], [30.7, 13.0], [30.8, 13.0], [30.9, 13.0], [31.0, 13.0], [31.1, 13.0], [31.2, 13.0], [31.3, 13.0], [31.4, 13.0], [31.5, 13.0], [31.6, 13.0], [31.7, 14.0], [31.8, 14.0], [31.9, 14.0], [32.0, 14.0], [32.1, 14.0], [32.2, 14.0], [32.3, 14.0], [32.4, 14.0], [32.5, 14.0], [32.6, 14.0], [32.7, 14.0], [32.8, 14.0], [32.9, 14.0], [33.0, 14.0], [33.1, 14.0], [33.2, 14.0], [33.3, 14.0], [33.4, 14.0], [33.5, 14.0], [33.6, 14.0], [33.7, 14.0], [33.8, 14.0], [33.9, 14.0], [34.0, 14.0], [34.1, 14.0], [34.2, 14.0], [34.3, 14.0], [34.4, 14.0], [34.5, 14.0], [34.6, 14.0], [34.7, 14.0], [34.8, 14.0], [34.9, 14.0], [35.0, 15.0], [35.1, 15.0], [35.2, 15.0], [35.3, 15.0], [35.4, 15.0], [35.5, 15.0], [35.6, 15.0], [35.7, 15.0], [35.8, 15.0], [35.9, 15.0], [36.0, 15.0], [36.1, 15.0], [36.2, 15.0], [36.3, 15.0], [36.4, 15.0], [36.5, 15.0], [36.6, 15.0], [36.7, 15.0], [36.8, 15.0], [36.9, 15.0], [37.0, 15.0], [37.1, 15.0], [37.2, 15.0], [37.3, 15.0], [37.4, 15.0], [37.5, 15.0], [37.6, 15.0], [37.7, 15.0], [37.8, 15.0], [37.9, 15.0], [38.0, 15.0], [38.1, 15.0], [38.2, 15.0], [38.3, 15.0], [38.4, 15.0], [38.5, 16.0], [38.6, 16.0], [38.7, 16.0], [38.8, 16.0], [38.9, 16.0], [39.0, 16.0], [39.1, 16.0], [39.2, 16.0], [39.3, 16.0], [39.4, 16.0], [39.5, 16.0], [39.6, 16.0], [39.7, 16.0], [39.8, 16.0], [39.9, 16.0], [40.0, 16.0], [40.1, 16.0], [40.2, 16.0], [40.3, 16.0], [40.4, 16.0], [40.5, 16.0], [40.6, 16.0], [40.7, 16.0], [40.8, 16.0], [40.9, 16.0], [41.0, 16.0], [41.1, 16.0], [41.2, 16.0], [41.3, 16.0], [41.4, 16.0], [41.5, 16.0], [41.6, 16.0], [41.7, 16.0], [41.8, 16.0], [41.9, 16.0], [42.0, 17.0], [42.1, 17.0], [42.2, 17.0], [42.3, 17.0], [42.4, 17.0], [42.5, 17.0], [42.6, 17.0], [42.7, 17.0], [42.8, 17.0], [42.9, 17.0], [43.0, 17.0], [43.1, 17.0], [43.2, 17.0], [43.3, 17.0], [43.4, 17.0], [43.5, 17.0], [43.6, 17.0], [43.7, 17.0], [43.8, 17.0], [43.9, 17.0], [44.0, 17.0], [44.1, 17.0], [44.2, 17.0], [44.3, 17.0], [44.4, 17.0], [44.5, 17.0], [44.6, 17.0], [44.7, 17.0], [44.8, 17.0], [44.9, 17.0], [45.0, 17.0], [45.1, 17.0], [45.2, 17.0], [45.3, 18.0], [45.4, 18.0], [45.5, 18.0], [45.6, 18.0], [45.7, 18.0], [45.8, 18.0], [45.9, 18.0], [46.0, 18.0], [46.1, 18.0], [46.2, 18.0], [46.3, 18.0], [46.4, 18.0], [46.5, 18.0], [46.6, 18.0], [46.7, 18.0], [46.8, 18.0], [46.9, 18.0], [47.0, 18.0], [47.1, 18.0], [47.2, 18.0], [47.3, 18.0], [47.4, 18.0], [47.5, 18.0], [47.6, 18.0], [47.7, 18.0], [47.8, 18.0], [47.9, 18.0], [48.0, 18.0], [48.1, 18.0], [48.2, 18.0], [48.3, 18.0], [48.4, 18.0], [48.5, 18.0], [48.6, 18.0], [48.7, 18.0], [48.8, 18.0], [48.9, 18.0], [49.0, 18.0], [49.1, 18.0], [49.2, 19.0], [49.3, 19.0], [49.4, 19.0], [49.5, 19.0], [49.6, 19.0], [49.7, 19.0], [49.8, 19.0], [49.9, 19.0], [50.0, 19.0], [50.1, 19.0], [50.2, 19.0], [50.3, 19.0], [50.4, 19.0], [50.5, 19.0], [50.6, 19.0], [50.7, 19.0], [50.8, 19.0], [50.9, 19.0], [51.0, 19.0], [51.1, 19.0], [51.2, 19.0], [51.3, 19.0], [51.4, 19.0], [51.5, 19.0], [51.6, 19.0], [51.7, 19.0], [51.8, 19.0], [51.9, 19.0], [52.0, 19.0], [52.1, 19.0], [52.2, 19.0], [52.3, 19.0], [52.4, 19.0], [52.5, 20.0], [52.6, 20.0], [52.7, 20.0], [52.8, 20.0], [52.9, 20.0], [53.0, 20.0], [53.1, 20.0], [53.2, 20.0], [53.3, 20.0], [53.4, 20.0], [53.5, 20.0], [53.6, 20.0], [53.7, 20.0], [53.8, 20.0], [53.9, 20.0], [54.0, 20.0], [54.1, 20.0], [54.2, 20.0], [54.3, 20.0], [54.4, 20.0], [54.5, 20.0], [54.6, 20.0], [54.7, 20.0], [54.8, 20.0], [54.9, 20.0], [55.0, 20.0], [55.1, 20.0], [55.2, 20.0], [55.3, 20.0], [55.4, 20.0], [55.5, 20.0], [55.6, 20.0], [55.7, 20.0], [55.8, 20.0], [55.9, 21.0], [56.0, 21.0], [56.1, 21.0], [56.2, 21.0], [56.3, 21.0], [56.4, 21.0], [56.5, 21.0], [56.6, 21.0], [56.7, 21.0], [56.8, 21.0], [56.9, 21.0], [57.0, 21.0], [57.1, 21.0], [57.2, 21.0], [57.3, 21.0], [57.4, 21.0], [57.5, 21.0], [57.6, 21.0], [57.7, 21.0], [57.8, 21.0], [57.9, 21.0], [58.0, 21.0], [58.1, 21.0], [58.2, 21.0], [58.3, 21.0], [58.4, 21.0], [58.5, 21.0], [58.6, 21.0], [58.7, 21.0], [58.8, 21.0], [58.9, 21.0], [59.0, 21.0], [59.1, 21.0], [59.2, 22.0], [59.3, 22.0], [59.4, 22.0], [59.5, 22.0], [59.6, 22.0], [59.7, 22.0], [59.8, 22.0], [59.9, 22.0], [60.0, 22.0], [60.1, 22.0], [60.2, 22.0], [60.3, 22.0], [60.4, 22.0], [60.5, 22.0], [60.6, 22.0], [60.7, 22.0], [60.8, 22.0], [60.9, 22.0], [61.0, 22.0], [61.1, 22.0], [61.2, 22.0], [61.3, 22.0], [61.4, 22.0], [61.5, 22.0], [61.6, 22.0], [61.7, 22.0], [61.8, 22.0], [61.9, 22.0], [62.0, 22.0], [62.1, 22.0], [62.2, 22.0], [62.3, 22.0], [62.4, 22.0], [62.5, 22.0], [62.6, 23.0], [62.7, 23.0], [62.8, 23.0], [62.9, 23.0], [63.0, 23.0], [63.1, 23.0], [63.2, 23.0], [63.3, 23.0], [63.4, 23.0], [63.5, 23.0], [63.6, 23.0], [63.7, 23.0], [63.8, 23.0], [63.9, 23.0], [64.0, 23.0], [64.1, 23.0], [64.2, 23.0], [64.3, 23.0], [64.4, 23.0], [64.5, 23.0], [64.6, 23.0], [64.7, 23.0], [64.8, 23.0], [64.9, 23.0], [65.0, 23.0], [65.1, 23.0], [65.2, 23.0], [65.3, 23.0], [65.4, 23.0], [65.5, 23.0], [65.6, 23.0], [65.7, 23.0], [65.8, 23.0], [65.9, 24.0], [66.0, 24.0], [66.1, 24.0], [66.2, 24.0], [66.3, 24.0], [66.4, 24.0], [66.5, 24.0], [66.6, 24.0], [66.7, 24.0], [66.8, 24.0], [66.9, 24.0], [67.0, 24.0], [67.1, 24.0], [67.2, 24.0], [67.3, 24.0], [67.4, 24.0], [67.5, 24.0], [67.6, 24.0], [67.7, 24.0], [67.8, 24.0], [67.9, 24.0], [68.0, 24.0], [68.1, 24.0], [68.2, 24.0], [68.3, 24.0], [68.4, 24.0], [68.5, 24.0], [68.6, 24.0], [68.7, 24.0], [68.8, 24.0], [68.9, 24.0], [69.0, 24.0], [69.1, 24.0], [69.2, 24.0], [69.3, 25.0], [69.4, 25.0], [69.5, 25.0], [69.6, 25.0], [69.7, 25.0], [69.8, 25.0], [69.9, 25.0], [70.0, 25.0], [70.1, 25.0], [70.2, 25.0], [70.3, 25.0], [70.4, 25.0], [70.5, 25.0], [70.6, 25.0], [70.7, 25.0], [70.8, 25.0], [70.9, 25.0], [71.0, 25.0], [71.1, 25.0], [71.2, 25.0], [71.3, 25.0], [71.4, 25.0], [71.5, 25.0], [71.6, 25.0], [71.7, 25.0], [71.8, 25.0], [71.9, 25.0], [72.0, 26.0], [72.1, 26.0], [72.2, 26.0], [72.3, 26.0], [72.4, 26.0], [72.5, 26.0], [72.6, 26.0], [72.7, 26.0], [72.8, 26.0], [72.9, 26.0], [73.0, 26.0], [73.1, 26.0], [73.2, 26.0], [73.3, 26.0], [73.4, 26.0], [73.5, 26.0], [73.6, 26.0], [73.7, 26.0], [73.8, 26.0], [73.9, 26.0], [74.0, 26.0], [74.1, 26.0], [74.2, 26.0], [74.3, 26.0], [74.4, 26.0], [74.5, 26.0], [74.6, 26.0], [74.7, 27.0], [74.8, 27.0], [74.9, 27.0], [75.0, 27.0], [75.1, 27.0], [75.2, 27.0], [75.3, 27.0], [75.4, 27.0], [75.5, 27.0], [75.6, 27.0], [75.7, 27.0], [75.8, 27.0], [75.9, 27.0], [76.0, 27.0], [76.1, 27.0], [76.2, 27.0], [76.3, 27.0], [76.4, 27.0], [76.5, 27.0], [76.6, 27.0], [76.7, 27.0], [76.8, 27.0], [76.9, 28.0], [77.0, 28.0], [77.1, 28.0], [77.2, 28.0], [77.3, 28.0], [77.4, 28.0], [77.5, 28.0], [77.6, 28.0], [77.7, 28.0], [77.8, 28.0], [77.9, 28.0], [78.0, 28.0], [78.1, 28.0], [78.2, 28.0], [78.3, 28.0], [78.4, 28.0], [78.5, 28.0], [78.6, 28.0], [78.7, 28.0], [78.8, 28.0], [78.9, 28.0], [79.0, 28.0], [79.1, 29.0], [79.2, 29.0], [79.3, 29.0], [79.4, 29.0], [79.5, 29.0], [79.6, 29.0], [79.7, 29.0], [79.8, 29.0], [79.9, 29.0], [80.0, 29.0], [80.1, 29.0], [80.2, 29.0], [80.3, 29.0], [80.4, 29.0], [80.5, 29.0], [80.6, 29.0], [80.7, 29.0], [80.8, 29.0], [80.9, 29.0], [81.0, 29.0], [81.1, 29.0], [81.2, 30.0], [81.3, 30.0], [81.4, 30.0], [81.5, 30.0], [81.6, 30.0], [81.7, 30.0], [81.8, 30.0], [81.9, 30.0], [82.0, 30.0], [82.1, 30.0], [82.2, 30.0], [82.3, 30.0], [82.4, 30.0], [82.5, 30.0], [82.6, 30.0], [82.7, 30.0], [82.8, 31.0], [82.9, 31.0], [83.0, 31.0], [83.1, 31.0], [83.2, 31.0], [83.3, 31.0], [83.4, 31.0], [83.5, 31.0], [83.6, 31.0], [83.7, 31.0], [83.8, 31.0], [83.9, 31.0], [84.0, 31.0], [84.1, 31.0], [84.2, 31.0], [84.3, 31.0], [84.4, 31.0], [84.5, 32.0], [84.6, 32.0], [84.7, 32.0], [84.8, 32.0], [84.9, 32.0], [85.0, 32.0], [85.1, 32.0], [85.2, 32.0], [85.3, 32.0], [85.4, 32.0], [85.5, 32.0], [85.6, 32.0], [85.7, 32.0], [85.8, 33.0], [85.9, 33.0], [86.0, 33.0], [86.1, 33.0], [86.2, 33.0], [86.3, 33.0], [86.4, 33.0], [86.5, 33.0], [86.6, 33.0], [86.7, 33.0], [86.8, 33.0], [86.9, 33.0], [87.0, 33.0], [87.1, 34.0], [87.2, 34.0], [87.3, 34.0], [87.4, 34.0], [87.5, 34.0], [87.6, 34.0], [87.7, 34.0], [87.8, 34.0], [87.9, 34.0], [88.0, 34.0], [88.1, 34.0], [88.2, 34.0], [88.3, 35.0], [88.4, 35.0], [88.5, 35.0], [88.6, 35.0], [88.7, 35.0], [88.8, 35.0], [88.9, 35.0], [89.0, 35.0], [89.1, 35.0], [89.2, 35.0], [89.3, 35.0], [89.4, 35.0], [89.5, 36.0], [89.6, 36.0], [89.7, 36.0], [89.8, 36.0], [89.9, 36.0], [90.0, 36.0], [90.1, 36.0], [90.2, 36.0], [90.3, 37.0], [90.4, 37.0], [90.5, 37.0], [90.6, 37.0], [90.7, 37.0], [90.8, 37.0], [90.9, 37.0], [91.0, 37.0], [91.1, 38.0], [91.2, 38.0], [91.3, 38.0], [91.4, 38.0], [91.5, 38.0], [91.6, 38.0], [91.7, 38.0], [91.8, 38.0], [91.9, 39.0], [92.0, 39.0], [92.1, 39.0], [92.2, 39.0], [92.3, 39.0], [92.4, 39.0], [92.5, 39.0], [92.6, 39.0], [92.7, 40.0], [92.8, 40.0], [92.9, 40.0], [93.0, 40.0], [93.1, 40.0], [93.2, 40.0], [93.3, 40.0], [93.4, 40.0], [93.5, 41.0], [93.6, 41.0], [93.7, 41.0], [93.8, 41.0], [93.9, 41.0], [94.0, 42.0], [94.1, 42.0], [94.2, 42.0], [94.3, 42.0], [94.4, 42.0], [94.5, 43.0], [94.6, 43.0], [94.7, 43.0], [94.8, 43.0], [94.9, 44.0], [95.0, 44.0], [95.1, 44.0], [95.2, 44.0], [95.3, 45.0], [95.4, 45.0], [95.5, 45.0], [95.6, 46.0], [95.7, 46.0], [95.8, 46.0], [95.9, 47.0], [96.0, 47.0], [96.1, 48.0], [96.2, 48.0], [96.3, 48.0], [96.4, 48.0], [96.5, 49.0], [96.6, 49.0], [96.7, 50.0], [96.8, 50.0], [96.9, 51.0], [97.0, 52.0], [97.1, 53.0], [97.2, 53.0], [97.3, 54.0], [97.4, 55.0], [97.5, 56.0], [97.6, 58.0], [97.7, 59.0], [97.8, 60.0], [97.9, 61.0], [98.0, 63.0], [98.1, 70.0], [98.2, 92.0], [98.3, 67751.0], [98.4, 67989.0], [98.5, 68242.0], [98.6, 68276.0], [98.7, 68332.0], [98.8, 68359.0], [98.9, 68699.0], [99.0, 69189.0], [99.1, 69262.0], [99.2, 69303.0], [99.3, 69330.0], [99.4, 69393.0], [99.5, 69433.0], [99.6, 69473.0], [99.7, 69529.0], [99.8, 69575.0], [99.9, 69604.0], [100.0, 69762.0]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 9823.0, "series": [{"data": [[0.0, 9823.0], [100.0, 2.0], [200.0, 4.0], [69500.0, 23.0], [68200.0, 20.0], [68300.0, 20.0], [69200.0, 18.0], [69100.0, 3.0], [69000.0, 2.0], [68700.0, 2.0], [68800.0, 2.0], [68900.0, 2.0], [69400.0, 25.0], [68500.0, 1.0], [68600.0, 3.0], [68400.0, 2.0], [67800.0, 3.0], [67700.0, 1.0], [69600.0, 9.0], [68100.0, 2.0], [68000.0, 2.0], [67900.0, 7.0], [69300.0, 21.0], [69700.0, 3.0]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 69700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 171.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9829.0, "series": [{"data": [[0.0, 9829.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 171.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.5161290322580645, "minX": 1.75796676E12, "maxY": 71.47921478060051, "series": [{"data": [[1.75796676E12, 36.162902315076174], [1.75796688E12, 46.5498533724341], [1.757967E12, 16.84593837535014], [1.75796706E12, 1.5161290322580645], [1.75796682E12, 71.47921478060051]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75796706E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 3.046875000000001, "minX": 1.0, "maxY": 35140.3, "series": [{"data": [[2.0, 3.333333333333333], [3.0, 9949.95238095238], [4.0, 3.046875000000001], [5.0, 3.3333333333333335], [7.0, 3.5], [8.0, 106.57142857142857], [9.0, 9.767441860465116], [10.0, 10.183673469387754], [11.0, 9.703703703703704], [12.0, 11.826923076923078], [13.0, 14.545454545454543], [14.0, 11.132352941176471], [15.0, 12.73684210526316], [16.0, 12.915254237288137], [17.0, 20.06818181818182], [18.0, 12.140350877192981], [19.0, 16.79999999999999], [20.0, 19880.72857142857], [21.0, 16.04411764705882], [22.0, 18.58928571428571], [23.0, 14.828947368421057], [24.0, 17.388888888888896], [25.0, 14.431818181818176], [26.0, 2801.8493150684935], [27.0, 21.644736842105264], [28.0, 15.500000000000007], [29.0, 19.618421052631575], [30.0, 17.684210526315788], [31.0, 22.466666666666665], [32.0, 15.989010989010984], [33.0, 30.528571428571446], [34.0, 18.322580645161292], [35.0, 32.82608695652174], [36.0, 23.133333333333333], [37.0, 19.169014084507037], [38.0, 20.86363636363636], [39.0, 21.24731182795699], [40.0, 762.0638297872341], [41.0, 21.579185520361996], [42.0, 17.012931034482758], [43.0, 20.383033419023125], [44.0, 22.75070821529747], [45.0, 31.755555555555546], [46.0, 23.612765957446804], [47.0, 27.1081081081081], [48.0, 25.875409836065565], [49.0, 25.109843081312405], [50.0, 15.599206349206344], [51.0, 26.83028286189684], [52.0, 9953.05730659026], [53.0, 416.3206831119542], [54.0, 18049.682051282045], [55.0, 4.166666666666667], [56.0, 4.230769230769231], [57.0, 6.0], [58.0, 6.214285714285715], [59.0, 6.357142857142858], [61.0, 7.866666666666666], [60.0, 11.0], [63.0, 8.343749999999998], [62.0, 6.7142857142857135], [65.0, 11.74], [67.0, 8.704225352112678], [66.0, 9.186046511627904], [64.0, 7.454545454545454], [68.0, 7.964285714285714], [69.0, 7.814814814814815], [71.0, 9.09090909090909], [70.0, 9.111111111111112], [72.0, 11.269005847953215], [73.0, 11.230769230769232], [75.0, 11.797619047619047], [74.0, 11.0], [76.0, 14.26923076923077], [77.0, 13.090909090909092], [78.0, 14.351851851851857], [79.0, 15.034482758620687], [80.0, 13.384615384615387], [81.0, 16.921311475409844], [82.0, 14.02857142857143], [83.0, 14.476190476190476], [84.0, 16.7947598253275], [85.0, 17.437500000000007], [86.0, 16.639240506329116], [87.0, 17.411764705882355], [88.0, 22.818181818181817], [89.0, 35140.3], [1.0, 3.5757575757575757]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}, {"data": [[47.868200000000115, 1199.2786000000067]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 89.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 218.55, "minX": 1.75796676E12, "maxY": 15702.866666666667, "series": [{"data": [[1.75796676E12, 15702.866666666667], [1.75796688E12, 15117.666666666666], [1.757967E12, 1582.7], [1.75796706E12, 412.3], [1.75796682E12, 11517.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75796676E12, 8323.7], [1.75796688E12, 8013.5], [1.757967E12, 838.95], [1.75796706E12, 218.55], [1.75796682E12, 6105.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75796706E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 17.029079616036146, "minX": 1.75796676E12, "maxY": 5042.260504201683, "series": [{"data": [[1.75796676E12, 17.029079616036146], [1.75796688E12, 1104.641935483868], [1.757967E12, 5042.260504201683], [1.75796706E12, 2249.5161290322567], [1.75796682E12, 2369.648960739034]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75796706E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 16.87972896668545, "minX": 1.75796676E12, "maxY": 5042.212885154066, "series": [{"data": [[1.75796676E12, 16.87972896668545], [1.75796688E12, 1104.497067448681], [1.757967E12, 5042.212885154066], [1.75796706E12, 2249.4301075268827], [1.75796682E12, 2369.535411855275]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75796706E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 5.8334274421231, "minX": 1.75796676E12, "maxY": 5038.974789915969, "series": [{"data": [[1.75796676E12, 5.8334274421231], [1.75796688E12, 1086.9208211143707], [1.757967E12, 5038.974789915969], [1.75796706E12, 2247.494623655913], [1.75796682E12, 2359.0080831408777]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75796706E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.75796676E12, "maxY": 69762.0, "series": [{"data": [[1.75796676E12, 254.0], [1.75796688E12, 69609.0], [1.757967E12, 69735.0], [1.75796706E12, 69618.0], [1.75796682E12, 69762.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75796676E12, 29.0], [1.75796688E12, 42.0], [1.757967E12, 16.0], [1.75796706E12, 5.0], [1.75796682E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75796676E12, 48.0], [1.75796688E12, 69308.78], [1.757967E12, 69581.3], [1.75796706E12, 69618.0], [1.75796682E12, 69138.55999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75796676E12, 35.0], [1.75796688E12, 50.0], [1.757967E12, 69475.4], [1.75796706E12, 16.0], [1.75796682E12, 41.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.75796676E12, 2.0], [1.75796688E12, 3.0], [1.757967E12, 2.0], [1.75796706E12, 3.0], [1.75796682E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75796676E12, 15.0], [1.75796688E12, 26.0], [1.757967E12, 4.0], [1.75796706E12, 4.0], [1.75796682E12, 16.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75796706E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 21.0, "maxY": 40.0, "series": [{"data": [[142.0, 4.0], [618.0, 24.5], [39.0, 4.0], [644.0, 8.0], [671.0, 26.0], [44.0, 4.0], [212.0, 9.0], [215.0, 5.0], [223.0, 11.0], [54.0, 3.0], [59.0, 3.0], [1200.0, 17.0], [1305.0, 22.0], [1372.0, 20.0], [85.0, 40.0], [21.0, 4.0], [1406.0, 29.0], [1662.0, 14.0], [28.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1662.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 21.0, "maxY": 39.0, "series": [{"data": [[142.0, 4.0], [618.0, 24.0], [39.0, 4.0], [644.0, 8.0], [671.0, 26.0], [44.0, 4.0], [212.0, 9.0], [215.0, 5.0], [223.0, 11.0], [54.0, 3.0], [59.0, 3.0], [1200.0, 17.0], [1305.0, 22.0], [1372.0, 20.0], [85.0, 39.0], [21.0, 4.0], [1406.0, 29.0], [1662.0, 14.0], [28.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1662.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.5, "minX": 1.75796676E12, "maxY": 60.516666666666666, "series": [{"data": [[1.75796676E12, 60.516666666666666], [1.75796688E12, 56.38333333333333], [1.757967E12, 5.566666666666666], [1.75796706E12, 1.5], [1.75796682E12, 42.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75796706E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.55, "minX": 1.75796676E12, "maxY": 59.03333333333333, "series": [{"data": [[1.75796676E12, 59.03333333333333], [1.75796688E12, 56.833333333333336], [1.757967E12, 5.95], [1.75796706E12, 1.55], [1.75796682E12, 43.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75796706E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.55, "minX": 1.75796676E12, "maxY": 59.03333333333333, "series": [{"data": [[1.75796676E12, 59.03333333333333], [1.75796688E12, 56.833333333333336], [1.757967E12, 5.95], [1.75796706E12, 1.55], [1.75796682E12, 43.3]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75796706E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.55, "minX": 1.75796676E12, "maxY": 59.03333333333333, "series": [{"data": [[1.75796676E12, 59.03333333333333], [1.75796688E12, 56.833333333333336], [1.757967E12, 5.95], [1.75796706E12, 1.55], [1.75796682E12, 43.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75796706E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

