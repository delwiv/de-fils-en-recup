angular.module('App.services').factory('ImageUploader', 
  ['FileUploader', 'Container', function(FileUploader, Container) {
  	FileUploader.inherit(ImageUploader, FileUploader);

  	var container = {};
  	var uploader = {}; 
    var fileName = '';

    function ImageUploader(containerName, itemName) {
      fileName = itemName;
      ImageUploader.super_.apply(this, {});
      this.url = '/api/Containers/' + containerName + '/upload';
      this.formData = [{ key: 'value' }];
      this.removeAfterUpload = true;

      Container.getContainer({container: containerName}, function success(data){
        container = data;
      }, function err(data){
        console.log(data);
        Container.createContainer({container: containerName}, function success(data){
          container = data;
        });
      });
    };

    ImageUploader.prototype.onBeforeUploadItem = function(fileItem) {
      var ext = getExtension(fileItem.file.name);
      fileItem.file.name = fileName + '.' + ext;
    };

    function getExtension(filename) {
      var parts = filename.split('.');
      return parts[parts.length - 1];
    }

    return ImageUploader;
  }]);