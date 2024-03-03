function Cs142TemplateProcessor(template) {
  this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function (dictionary) {
  var template = this.template;

  if (template.includes("{{month}}")) {
    template = template.replace("{{month}}", dictionary.month);
  }

  if (template.includes("{{day}}")) {
    template = template.replace("{{day}}", dictionary.day);
  }

  if (template.includes("{{year}}")) {
    template = template.replace("{{year}}", dictionary.year);
  }

  return template;
};
