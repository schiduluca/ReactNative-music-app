//
//  LocalStorage.m
//  MusicApp
//
//  Created by Luca SCHIDU on 2/24/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "LocalStorage.h"

@implementation LocalStorage

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport {
  return @{@"greeting": @"Welcome to the DevDactic\n React Native Tutorial!"};
}


RCT_EXPORT_METHOD(squareMe:(int)number:(RCTResponseSenderBlock)callback) {
  callback(@[[NSNull null], [NSNumber numberWithInt:(number*number)]]);
}

RCT_EXPORT_METHOD(evenNumber:(int)number:(RCTResponseSenderBlock)callback) {
  callback(@[[NSNull null], [NSNumber numberWithInt:(number % 2)]]);
}

@synthesize fileMgr;
@synthesize homeDir;
@synthesize filename;
@synthesize filepath;


-(NSString *) setFilename{
  filename = @"mytextfile.txt";
  
  return filename;
}

-(NSString *)GetDocumentDirectory{
  fileMgr = [NSFileManager defaultManager];
  homeDir = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents"];
  
  return homeDir;
}


/*Create a new file*/
RCT_EXPORT_METHOD(writeToFile:(NSString *)textToWrite) {
  filepath = [[NSString alloc] init];
  NSError *err;
  
  filepath = [self.GetDocumentDirectory stringByAppendingPathComponent:self.setFilename];
  
  BOOL ok = [textToWrite writeToFile:filepath atomically:YES encoding:NSUnicodeStringEncoding error:&err];
  
  if (!ok) {
    NSLog(@"Error writing file at %@\n%@",
          filepath, [err localizedFailureReason]);
  }
  
}

RCT_REMAP_METHOD(readFromFile, resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  filepath = [[NSString alloc] init];
  NSError *error;
  filepath = [self.GetDocumentDirectory stringByAppendingPathComponent:self.setFilename];
  NSString *txtInFile = [[NSString alloc] initWithContentsOfFile:filepath encoding:NSUnicodeStringEncoding error:&error];
  if(txtInFile) {
    resolve(txtInFile);
  } else {
    reject(@"no_events", @"There were no events", error);
  }
}


@end
