import {File, DirectoryEntry, FileEntry, IWriteOptions} from '@ionic-native/file';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FileUtils{

  //在哪里放置特定于应用程序的数据文件。
  dataDirectory:string;
  flags:Flags = { create: true, exclusive: false};
  constructor(private file: File){
    //Android：外部存储器上的应用程序空间。
    this.dataDirectory = this.file.externalDataDirectory;
  }

  //创建目录
  createDir(folder:string,path?:string):Promise<any>{
    if(path)
      return this.file.createDir(this.dataDirectory,folder+"/"+path,true);
    else
      return this.file.createDir(this.dataDirectory,folder,true);
  }

  //检查文件夹是否存在
  checkDir(folder:string,path?:string):Promise<any>{
    if(path)
      return this.file.checkDir(this.dataDirectory+"/"+path,folder);
    else
      return this.file.checkDir(this.dataDirectory,folder);
  }

  //删除文件夹
  removeDir(folder:string,path?:string):Promise<any>{
    if(path)
      return this.file.removeDir(this.dataDirectory+"/"+path,folder);
    else
      return this.file.removeDir(this.dataDirectory,folder);
  }

  //列出路径的所有目录
  listDir(folder:string,path?:string):Promise<any>{
    if(path)
      return this.file.listDir(this.dataDirectory+"/"+path,folder);
    else
      return this.file.listDir(this.dataDirectory,folder);
  }

  //删除该路径文件夹下的所有文件夹以及文件
  removeRecursively(folder:string,path?:string):Promise<any>{
    if(path)
      return this.file.removeRecursively(this.dataDirectory+"/"+path,folder);
    else
      return this.file.removeRecursively(this.dataDirectory,folder);
  }

  //创建文件
  oncreateFile(fileName:string,path?:string):Promise<any>{
    if(path)
      return this.file.createFile(this.dataDirectory+"/"+path,fileName, true);
    else
      return this.file.createFile(this.dataDirectory,fileName, true);
  }

  //检查文件是否存在
  checkFile(fileName:string,path?:string):Promise<any>{
    if(path)
      return this.file.checkFile(this.dataDirectory+"/"+path,fileName);
    else
      return this.file.checkFile(this.dataDirectory,fileName);
  }

  //删除文件
  removeFile(fileName:string,path?:string):Promise<any>{
    if(path)
      return this.file.removeFile(this.dataDirectory+"/"+path,fileName);
    else
      return this.file.removeFile(this.dataDirectory,fileName);
  }
  //解析文件目录
  resolveDirectoryUrl(path:string):Promise<DirectoryEntry>{
    return this.file.resolveDirectoryUrl(path);
  }

  //获取文件
  getFile(fileName,filePath?:string):Observable<FileEntry>{
    return Observable.create((observer)=>{
      let path = this.dataDirectory;
      if(filePath){
        path+"/"+filePath;
      }
      this.resolveDirectoryUrl(path).then((d:DirectoryEntry)=>{
        let file = this.file.getFile(d, fileName, this.flags);
        observer.next(file);
      },()=>{
        observer.next(null);
      });
    });
  }
  //写入文件
  writeFile(fileName, content,filePath?:string):Promise<any>{
      let option:IWriteOptions = {
        replace:true
      };
      if(filePath){
        return this.file.writeFile(filePath, fileName, content, option);
      }else{
        return this.file.writeFile(this.dataDirectory, fileName, content, option);
      }
  }
}
