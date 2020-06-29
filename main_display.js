window.onload = function() {

  $('#bar-graph-container').hide();
  $('#line-graph-container').show();
  var active_tab = '#santa-clara';
  line_plot_by_county("Santa Clara County");

  $('#santa-clara').click(line_plot_call_back("#santa-clara"));
  $('#alameda').click(line_plot_call_back("#alameda"));
  $('#san-mateo').click(line_plot_call_back("#san-mateo"));
  $('#comparison').click(plot_all_bars_call_back());

  function line_plot_call_back(current_tab) {
    return function() {
      if (active_tab === current_tab) {
        return;
      }
      $('#bar-graph-container').hide();
      $('#line-graph-container').show();

      $(active_tab).removeClass("active");
      $(current_tab).addClass("active");

      if (current_tab === "#santa-clara") {
        line_plot_by_county("Santa Clara County");
      } else if (current_tab === "#alameda") {
        line_plot_by_county("Alameda County");
      } else {
        line_plot_by_county("San Mateo County");
      }
      active_tab = current_tab;
    }
  }

  function plot_all_bars_call_back() {
    return function() {
      current_tab = "#comparison";
      if (active_tab === current_tab) {
        return;
      }

      $('#line-graph-container').hide();
      $('#bar-graph-container').show();

      $(active_tab).removeClass("active");
      $(current_tab).addClass("active");

      plot_all_bars();
      active_tab = current_tab;
    }
  }

}
